"use client";

import { Account, Option } from "@/main/AccountList/page";
import { Button, Input, Table, Select } from "antd";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

interface AccountListTableProps {
  accounts: Account[];
  options: Option[];
  editingId: number | null;
  editedData: {
    employee_work_email: string;
    employee_work_password: string;
    role: string;
  } | null;
  handleAdjust: (account: Account) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (selectedOption: string) => void;
  handleSave: () => void;
}

export default function AccountListTable({
  accounts,
  options,
  editingId,
  editedData,
  handleAdjust,
  handleChange,
  handleSelectChange,
  handleSave,
}: AccountListTableProps) {
  const router = useRouter();
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: "10%",
      align: "center" as const,
      render: (_: unknown, __: unknown, index: number) => index + 1,
    },
    {
      title: "Email",
      dataIndex: "employee_work_email",
      key: "employee_work_email",
      width: "25%",
      align: "center" as const,
      onCell: () => ({ style: { textAlign: "left" as const, padding: " 10px" } }),
      render: (text: string, record: Account) =>
        editingId === record.id ? (
          <Input name="employee_work_email" type="email" value={editedData?.employee_work_email || ""} onChange={handleChange} />
        ) : (
          text
        ),
    },
    {
      title: "Password",
      dataIndex: "employee_work_password",
      key: "employee_work_password",
      width: "25%",
      align: "center" as const,
      render: (_: unknown, record: Account) =>
        editingId === record.id ? (
          <Input name="employee_work_password" value={editedData?.employee_work_password || ""} onChange={handleChange} />
        ) : (
          "******"
        ),
    },
    {
      title: "Role",
      width: "20%",
      align: "center" as const,
      render: (record: Account) =>
        editingId === record.id ? (
          <Select style={{ width: "100%" }} options={options} defaultValue={record.role} onChange={handleSelectChange} />
        ) : (
          record.role
        ),
    },
    {
      title: "Actions",
      width: "20%",
      align: "center" as const,
      render: (record: Account) =>
        editingId === record.id ? (
          <Button onClick={handleSave} type="primary">
            Save
          </Button>
        ) : (
          <div className="flex gap-x-2 justify-center">
            <Button onClick={() => router.push(`/main/AccountDetail?id=${record.id}`)} type="primary">
              Detail
            </Button>
            <Button onClick={() => handleAdjust(record)} variant="solid" color="cyan">
              Adjust
            </Button>
          </div>
        ),
    },
  ];
  return <Table columns={columns} dataSource={accounts} rowKey="id" size="small" pagination={{ pageSize: 10 }} />;
}
