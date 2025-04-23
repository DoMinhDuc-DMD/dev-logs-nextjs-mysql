"use client";

import { Account, AccountDevlog } from "@/app/main/DevlogList/page";
import { Button, Checkbox, Table } from "antd";
import { useState } from "react";
import { CSVLink } from "react-csv";
import { ChangeEvent } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import DownloadIcon from "@mui/icons-material/Download";
import Search from "antd/es/input/Search";

interface DevlogListTableProps {
  userRole: string | null;
  accountDevlogData: AccountDevlog[];
  accountData: Account[];
  searchAccountInput: string;
  openModal: (devlog: AccountDevlog[]) => void;
  handleSearchAccount: (value: string) => void;
  handleSearchAccountChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleResetAccount: () => void;
}

export default function DevlogListTable({
  userRole,
  accountDevlogData,
  accountData,
  searchAccountInput,
  openModal,
  handleSearchAccount,
  handleSearchAccountChange,
  handleResetAccount,
}: DevlogListTableProps) {
  const [selectedAccount, setSelectedAccount] = useState<Account[]>([]);
  const csvCondition = userRole === "Admin" || userRole === "HR";

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
      width: "15%",
      align: "center" as const,
      render: (record: Account) => {
        const accountDevlog = accountDevlogData.filter((devlog) => devlog.account_id === record.id);
        return (
          <div className="flex gap-x-2 justify-center">
            <Button type="primary" onClick={() => openModal(accountDevlog)}>
              Chi tiết
            </Button>
          </div>
        );
      },
    },
    ...(csvCondition
      ? [
          {
            title: "Chọn",
            width: "5%",
            align: "center" as const,
            render: (record: Account) => {
              return (
                <Checkbox
                  onChange={() => handleCheckBoxChange(record)}
                  disabled={accountDevlogData.filter((dev) => dev.account_id === record.id).length === 0}
                />
              );
            },
          },
        ]
      : []),
  ];

  const handleCheckBoxChange = (account: Account) => {
    const devlogs = accountDevlogData.filter((dev) => dev.account_id === account.id);

    if (devlogs.length === 0) {
      return;
    }

    setSelectedAccount((prev) => {
      const isAccountSelected = prev.find((acc: Account) => acc.id === account.id);

      if (isAccountSelected) {
        return prev.filter((acc: Account) => acc.id !== account.id);
      } else {
        return [...prev, account];
      }
    });
  };

  const csvData = selectedAccount.flatMap((acc) => {
    const devlogs = accountDevlogData.filter((dev) => dev.account_id === acc.id);

    return devlogs.map((devlog) => ({
      id: acc.id,
      employee_code: acc.employee_code,
      employee_name: acc.employee_name,
      employee_work_email: acc.employee_work_email,
      role: acc.role,
      project_name: devlog.project_name,
      task_name: devlog.task_name,
      hours: devlog.hours,
      note: devlog.note,
      date: devlog.date,
      overtime: devlog.overtime ? "Yes" : "No",
    }));
  });

  return (
    <>
      <div className="py-5">
        <h1 className="text-center text-xl pb-3 font-bold">Danh sách nhân viên nhập devlog</h1>
        <div className="flex justify-end gap-x-5">
          {csvCondition && selectedAccount.length > 0 && (
            <CSVLink className="" data={csvData} filename="employee_devlog_data">
              <Button type="primary">
                Download CSV <DownloadIcon />
              </Button>
            </CSVLink>
          )}
          <Button icon={<RestoreIcon />} onClick={handleResetAccount}></Button>
          <Search
            placeholder="Nhập từ khóa"
            value={searchAccountInput}
            style={{ width: "25%" }}
            onChange={handleSearchAccountChange}
            onSearch={() => handleSearchAccount(searchAccountInput)}
            enterButton
          />
        </div>
      </div>
      <Table rowKey="id" columns={columns} dataSource={accountData} size="small" pagination={{ pageSize: 10 }} />
    </>
  );
}
