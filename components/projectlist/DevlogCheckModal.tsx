"use client";

import { Button, Checkbox, Modal, Table } from "antd";
import { useState } from "react";

interface DevlogCheckModalProps {
  project: any;
  date: string;
  memberProjects: any[];
  isOpenDevlogCheckModal: { [key: number]: boolean };
  handleCloseModal: (projectId: number) => void;
}

export default function DevlogCheckModal({
  project,
  date,
  memberProjects,
  isOpenDevlogCheckModal,
  handleCloseModal,
}: DevlogCheckModalProps) {
  const [checked, setChecked] = useState<{ [key: number]: boolean }>({});

  const handleNotice = (memberId: number) => {
    alert(`Đã thông báo tới ${memberId}`);
    setChecked((prev) => ({
      ...prev,
      [memberId]: true,
    }));
  };

  const columns = [
    {
      title: "STT",
      key: "id",
      width: "10%",
      align: "center" as const,
      render: (_: any, __: any, index: number) => index + 1,
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
      render: (record: any) => <Checkbox checked={checked[record.account_id]} disabled />,
    },
    {
      title: "Hành động",
      width: "25%",
      align: "center" as const,
      render: (record: any) => (
        <Button type="primary" onClick={() => handleNotice(record.account_id)}>
          Thông báo
        </Button>
      ),
    },
  ];

  return (
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
          <strong>Ngày:</strong> {date}
        </div>
      </div>
      <Table rowKey={"id"} columns={columns} dataSource={memberProjects} size="small" pagination={{ pageSize: 5 }} />
    </Modal>
  );
}
