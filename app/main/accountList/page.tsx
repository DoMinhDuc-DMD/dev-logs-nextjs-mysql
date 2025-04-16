"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import { notification } from "antd";
import useAuthGuard from "@/hooks/useAuthGuard";
import AccountListSearch from "@/components/AccountList/AccountListSearch";
import AccountListTable from "@/components/AccountList/AccountListTable";

export interface Account {
  id: number;
  employee_work_email: string;
  employee_work_password: string;
  role: string;
}

export interface Option {
  label: string;
  value: string;
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
  const [options, setOptions] = useState<Option[]>([]);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (msg: string) => {
    api.success({
      message: msg,
      placement: "topRight",
      duration: 2,
      style: {
        width: 400,
        borderRadius: 10,
      },
    });
  };

  const fetchAccount = async () => {
    try {
      const res = await axios.get("/api/AccountList");
      const data = res.data;

      setAccounts(data.account);
      setOriginalData(data.account);
      setOptions(data.role);
    } catch (error) {
      console.log("Lỗi lấy danh sách tài khoản: ", error);
    }
  };

  useAuthGuard(["Admin", "HR"]);

  useEffect(() => {
    fetchAccount();
  }, [router]);

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

  const handleSelectChange = (selectedOption: string) => {
    setEditedData((prev) => ({ ...prev!, role: selectedOption }));
  };

  const handleSave = async () => {
    if (!editingId || !editedData) return;

    const original = originalData.find((data) => data.id === editingId);
    if (!original) return;

    const isChanged =
      original.employee_work_email !== editedData.employee_work_email ||
      original.employee_work_password !== editedData.employee_work_password ||
      original.role !== editedData.role;

    if (!isChanged) {
      setEditingId(null);
      setEditedData(null);
      return;
    }

    try {
      const res = await axios.put("/api/AccountList", {
        id: editingId,
        email: editedData?.employee_work_email,
        password: editedData?.employee_work_password,
        role: editedData?.role,
      });

      openNotification(res.data.message);

      fetchAccount();
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
    <>
      {contextHolder}
      <div className="p-5">
        <div className="w-full rounded px-5 bg-white">
          <AccountListSearch
            searchInput={searchInput!}
            handleReset={handleReset}
            handleSearch={handleSearch}
            handleSearchChange={handleSearchChange}
          />
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
    </>
  );
}
