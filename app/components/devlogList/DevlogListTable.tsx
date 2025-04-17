"use client";

import { DevlogList } from "@/app/main/DevlogList/page";
import { Button, Table } from "antd";

interface DevlogListTableProps {
  data: DevlogList[];
  openModal: (devlog: DevlogList) => void;
}

export default function DevlogListTable({ data, openModal }: DevlogListTableProps) {
  const columns = [
    {
      title: "STT",
      key: "id",
      width: "2%",
      align: "center" as const,
      render: (_: unknown, __: unknown, index: number) => index + 1,
    },
    {
      title: "Mã nhân viên",
      dataIndex: "employee_code",
      key: "employee_code",
      width: "8%",
      align: "center" as const,
    },
    {
      title: "Email",
      dataIndex: "employee_work_email",
      key: "employee_work_email",
      width: "10%",
      align: "center" as const,
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
      width: "25%",
      align: "center" as const,
    },
    {
      title: "Số giờ",
      dataIndex: "hours",
      key: "hours",
      width: "5%",
      align: "center" as const,
    },
    {
      title: "Hành động",
      width: "10%",
      align: "center" as const,
      render: (record: DevlogList) => (
        <div className="flex gap-x-2 justify-center">
          <Button type="primary" onClick={() => openModal(record)}>
            Detail
          </Button>
        </div>
      ),
    },
  ];
  return <Table rowKey="id" columns={columns} dataSource={data} size="small" pagination={{ pageSize: 10 }} />;
}
