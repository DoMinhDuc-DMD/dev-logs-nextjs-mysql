"use client";

import { Table, Button, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import Select from "react-select";
import Search from "antd/es/input/Search";
import RestoreIcon from "@mui/icons-material/Restore";

interface Account {
  id: number;
  employee_work_email: string;
  employee_work_password: string;
  role: string;
}

export default function AccountList() {
  const router = useRouter();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [originalData, setOriginalData] = useState<Account[]>([]);
  const [searchInput, setSearchInput] = useState<string>();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<{
    employee_work_email: string;
    employee_work_password: string;
    role: string;
  } | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [options, setOptions] = useState([]);

  const fetchAccount = async () => {
    try {
      const res = await fetch("/main/accountlist/api", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Không thể lấy danh sách tài khoản");
      }

      const data = await res.json();

      setAccounts(data.accounts);
      setOriginalData(data.accounts);
      setOptions(data.formattedRole);
    } catch (error) {
      console.log("Lỗi lấy danh sách tài khoản: ", error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userRole = sessionStorage.getItem("userRole");
      const loggedIn = sessionStorage.getItem("isLogin");

      setRole(userRole);

      if (!loggedIn) {
        router.replace("/auth");
      } else if (userRole !== "Admin" && userRole !== "HR") {
        router.replace("/main/notyourright");
      }
    }
    fetchAccount();
  }, [role]);

  const handleAdjust = (account: Account) => {
    setEditingId(account.id);
    setEditedData({
      employee_work_email: account.employee_work_email,
      employee_work_password: account.employee_work_password,
      role: account.role,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedData((prev) => ({ ...prev!, [e.target.name]: e.target.value }));
  };
  const handleSelectChange = (selectedOption: any) => {
    setEditedData((prev) => ({ ...prev!, role: selectedOption.value }));
  };

  const handleSave = async () => {
    if (!editingId || !editedData) return;
    try {
      await fetch("/main/accountlist/api", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          email: editedData?.employee_work_email,
          password: editedData?.employee_work_password,
          role: editedData?.role,
        }),
      });

      await fetchAccount();
      setEditingId(null);
      setEditedData(null);
    } catch (error) {
      console.log("Lỗi lưu thông tin tài khoản: ", error);
    }
  };

  const handleSearch = (value: string) => {
    if (!value) {
      setAccounts(originalData);
    } else {
      setSearchInput(value);
      const searchTerm = value.toLowerCase();

      const filteredAccounts = originalData.filter(
        (account) => account.employee_work_email.includes(searchTerm) || account.role.toLowerCase().includes(searchTerm)
      );

      setAccounts(filteredAccounts);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleReset = () => {
    setSearchInput("");
    setAccounts(originalData);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "10%",
      align: "center" as const,
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Email",
      dataIndex: "employee_work_email",
      key: "employee_work_email",
      width: "25%",
      align: "center" as const,
      onCell: () => ({ style: { textAlign: "left" as const, padding: " 10px" } }),
      render: (text: string, record: any) =>
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
      render: (text: string, record: any) =>
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
      render: (_: any, record: any) =>
        editingId === record.id ? (
          <Select options={options} defaultValue={{ label: record.role, value: record.role }} onChange={handleSelectChange} />
        ) : (
          record.role
        ),
    },
    {
      title: "Actions",
      width: "20%",
      align: "center" as const,
      render: (_: any, record: any) =>
        editingId === record.id ? (
          <Button onClick={handleSave} type="primary">
            Save
          </Button>
        ) : (
          <div className="flex gap-x-2 justify-center">
            <Button onClick={() => router.push(`/main/accountlist/accountdetail?id=${record.id}`)} type="primary">
              Detail
            </Button>
            <Button onClick={() => handleAdjust(record)} variant="solid" color="cyan">
              Adjust
            </Button>
          </div>
        ),
    },
  ];

  return (
    <div className="p-5">
      <div className="w-full rounded px-5 bg-white">
        <div className="flex py-5 gap-x-5 justify-end">
          <Button icon={<RestoreIcon />} onClick={handleReset}></Button>
          <Search
            placeholder="input search text"
            value={searchInput}
            style={{ width: "25%" }}
            onChange={handleSearchChange}
            onSearch={handleSearch}
            enterButton
          />
        </div>
        <Table columns={columns} dataSource={accounts} rowKey="id" size="small" pagination={{ pageSize: 10 }} />
      </div>
    </div>
  );
}
