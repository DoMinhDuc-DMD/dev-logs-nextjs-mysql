"use client";

import { Account, AccountDevlog } from "@/app/main/DevlogList/page";
import { Button, Checkbox, Table } from "antd";
import { useMemo, useState } from "react";
import { CSVLink } from "react-csv";
import { ChangeEvent } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import DownloadIcon from "@mui/icons-material/Download";
import Search from "antd/es/input/Search";
import { UserRole } from "@/app/constant/roleAuth";

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
  const csvCondition = userRole === UserRole.Admin || userRole === UserRole.HR;

  const accountWithDevlog = useMemo(
    () => accountData.filter((acc) => accountDevlogData.some((accDev) => acc.id === accDev.account_id)),
    [accountData, accountDevlogData]
  );

  const isAllSelected = selectedAccount.length === accountWithDevlog.length && accountWithDevlog.length > 0;

  const handleSelectAll = () => {
    setSelectedAccount(isAllSelected ? [] : accountWithDevlog);
  };

  const handleCheckBoxChange = (account: Account) => {
    setSelectedAccount((prev) =>
      prev.some((acc) => acc.id === account.id) ? prev.filter((acc) => acc.id !== account.id) : [...prev, account]
    );
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
            title: (
              <Checkbox checked={isAllSelected} indeterminate={selectedAccount.length > 0 && !isAllSelected} onChange={handleSelectAll} />
            ),
            width: "5%",
            align: "center" as const,
            render: (record: Account) => {
              const isDisabled = accountDevlogData.filter((dev) => dev.account_id === record.id).length === 0;
              const isChecked = selectedAccount.some((acc) => acc.id === record.id);

              return <Checkbox checked={isChecked} onChange={() => handleCheckBoxChange(record)} disabled={isDisabled} />;
            },
          },
        ]
      : []),
  ];

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
