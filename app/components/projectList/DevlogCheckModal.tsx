"use client";

import { Button, message, Modal, notification, Table } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Member, ProjectList } from "@/app/main/projectList/page";

interface DevlogCheckModalProps {
  project: ProjectList;
  userId: string;
  memberProjects: Member[];
  isOpenDevlogCheckModal: { [key: number]: boolean };
  handleCloseModal: (projectId: number) => void;
}

export default function DevlogCheckModal({
  project,
  userId,
  memberProjects,
  isOpenDevlogCheckModal,
  handleCloseModal,
}: DevlogCheckModalProps) {
  const [disabled, setDisabled] = useState<{ [key: number]: boolean }>({});
  const date = dayjs(new Date().toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (msg: string, memberName: string) => {
    api.success({
      message: "Thông báo thành công",
      description: `${msg} đến ${memberName}`,
      placement: "topRight",
      duration: 2,
      style: {
        width: 400,
        borderRadius: 10,
      },
    });
  };

  const handleNotice = async (accountId: number, memberName: string) => {
    try {
      const res = await axios.post("/api/projectList", { action: "noticeDevlog", userId, accountId, projectId: project.id, date });
      openNotification(res.data.message, memberName);
    } catch (error) {
      console.log(error);
    }

    setDisabled((prev) => ({ ...prev, [accountId]: true }));
    setTimeout(() => {
      setDisabled((prev) => ({ ...prev, [accountId]: false }));
    }, 10000);
  };

  const columns = [
    {
      title: "STT",
      key: "id",
      width: "10%",
      align: "center" as const,
      render: (_: unknown, __: unknown, index: number) => index + 1,
    },
    {
      title: "Tên nhân viên",
      dataIndex: "employee_name",
      key: "employee_name",
      width: "40%",
      align: "center" as const,
    },
    {
      title: "Devlog hôm nay",
      width: "25%",
      align: "center" as const,
      render: (record: Member) =>
        dayjs(record.devlog_date).format("DD/MM/YYYY") === dayjs(new Date()).format("DD/MM/YYYY") ? (
          <CheckCircleTwoTone twoToneColor="#4ec80c" />
        ) : (
          <CloseCircleTwoTone twoToneColor="#dc2d2d" />
        ),
    },
    {
      title: "Hành động",
      width: "25%",
      align: "center" as const,
      render: (record: Member) => (
        <Button
          type="primary"
          onClick={() => handleNotice(record.account_id, record.employee_name)}
          disabled={
            record.account_id === Number(userId) ||
            new Date(record.devlog_date).toLocaleDateString() === new Date().toLocaleDateString() ||
            disabled[record.account_id]
          }
        >
          Thông báo
        </Button>
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <Modal
        title="Theo dõi devlog nhân viên"
        width={"50%"}
        open={isOpenDevlogCheckModal[project.id] || false}
        onOk={() => handleCloseModal(project.id)}
        onCancel={() => handleCloseModal(project.id)}
      >
        <div className="flex justify-between my-3">
          <div>
            <strong>Tên dự án:</strong> {project.project_name}
          </div>
          <div>
            <strong>Ngày:</strong> {dayjs(date).format("DD-MM-YYYY")}
          </div>
        </div>
        <Table
          rowKey={(record) => record.account_id}
          columns={columns}
          dataSource={memberProjects}
          size="small"
          pagination={{ pageSize: 5 }}
        />
      </Modal>
    </>
  );
}
