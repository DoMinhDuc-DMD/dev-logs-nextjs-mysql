"use client";

import { AccountDevlog } from "@/app/main/DevlogList/page";
import { Modal, Table } from "antd";
import Search from "antd/es/input/Search";

interface DevlogListModalProps {
  data: AccountDevlog[];
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function DevlogListModal({ data, isModalOpen, closeModal }: DevlogListModalProps) {
  const columns = [
    {
      title: "STT",
      key: "id",
      width: "5%",
      align: "center" as const,
      render: (_: unknown, __: unknown, index: number) => index + 1,
    },
    {
      title: "Tên dự án",
      dataIndex: "project_name",
      key: "project_name",
      width: "20%",
      align: "center" as const,
    },
    {
      title: "Tên tác vụ",
      dataIndex: "task_name",
      key: "task_name",
      width: "20%",
      align: "center" as const,
    },

    {
      title: "Số giờ",
      dataIndex: "hours",
      key: "hours",
      width: "10%",
      align: "center" as const,
    },
    {
      title: "Thời gian nhập devlog",
      dataIndex: "date",
      key: "date",
      width: "15%",
      align: "center" as const,
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
      width: "20%",
      align: "center" as const,
    },
  ];
  return (
    <Modal
      width={"70%"}
      className="text-center"
      title={`Lịch sử nhập devlog của`}
      open={isModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <Table rowKey="id" columns={columns} dataSource={data} size="small" pagination={{ pageSize: 10 }} />
    </Modal>
  );
}
