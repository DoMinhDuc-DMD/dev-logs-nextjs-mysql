"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import AccountListTable from "@/components/accountList/AccountListTable";
import AccountListSearch from "@/components/accountList/AccountListSearch";

export interface Account {
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
      const res = await axios.get("/api/accountList");
      const data = res.data;

      setAccounts(data.accounts);
      setOriginalData(data.accounts);
      setOptions(data.formattedRole);
    } catch (error) {
      console.log("Lỗi lấy danh sách tài khoản: ", error);
    }
  };

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }
    if (userRole !== "Admin" && userRole !== "HR") {
      router.replace("/main/notYourRight");
    }

    setRole(userRole);
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
      await axios.put("/api/accountList", {
        id: editingId,
        email: editedData?.employee_work_email,
        password: editedData?.employee_work_password,
        role: editedData?.role,
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

  return (
    <div className="p-5">
      <div className="w-full rounded px-5 bg-white">
        <AccountListSearch searchInput={searchInput!} handleReset={handleReset} handleSearch={handleSearch} handleSearchChange={handleSearchChange} />
        <AccountListTable
          accounts={accounts}
          options={options}
          editingId={editingId}
          handleAdjust={handleAdjust}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          handleSave={handleSave}
          editedData={editedData}
        />
      </div>
    </div>
  );
}
