"use client";

import { Account, AccountDevlog } from "@/app/main/DevlogList/page";
import { Button, Table } from "antd";

interface DevlogListTableProps {
  data: AccountDevlog[];
  accountData: Account[];
  openModal: (devlog: AccountDevlog[]) => void;
}

export default function DevlogListTable({ data, accountData, openModal }: DevlogListTableProps) {
  const columns = [
    {
      title: "STT",
      key: "id",
      width: "10%",
      align: "center" as const,
      render: (_: unknown, __: unknown, index: number) => index + 1,
    },
    {
      title: "Mã nhân viên",
      dataIndex: "employee_code",
      key: "employee_code",
      width: "20%",
      align: "center" as const,
    },
    {
      title: "Tên nhân viên",
      dataIndex: "employee_name",
      key: "employee_name",
      width: "20%",
      align: "center" as const,
    },
    {
      title: "Email",
      dataIndex: "employee_work_email",
      key: "employee_work_email",
      width: "30%",
      align: "center" as const,
    },
    {
      title: "Chi tiết nhập devlog",
      width: "20%",
      align: "center" as const,
      render: (record: Account) => {
        const accountDevlog = data.filter((devlog) => devlog.account_id === record.id);
        return (
          <div className="flex gap-x-2 justify-center">
            <Button type="primary" onClick={() => openModal(accountDevlog)}>
              Chi tiết
            </Button>
          </div>
        );
      },
    },
  ];
  return <Table rowKey="id" columns={columns} dataSource={accountData} size="small" pagination={{ pageSize: 10 }} />;
}
