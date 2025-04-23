"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import DevlogListModal from "../../components/DevlogList/DevlogListModal";
import DevlogListTable from "../../components/DevlogList/DevlogListTable";
import { notification } from "antd";
import { UserRole } from "@/app/constant/roleAuth";

export interface Account {
  id: number;
  employee_code: string;
  employee_work_email: string;
  employee_name: string;
  role: string;
}

export interface AccountDevlog {
  id: number;
  account_id: number;
  employee_name: string;
  employee_code: string;
  employee_work_email: string;
  date: string;
  hours: number;
  note: string;
  overtime: boolean;
  project_id: number;
  project_name: string;
  task_id: number;
  task_name: string;
}

export default function DevlogList() {
  const router = useRouter();
  const [searchAccountInput, setSearchAccountInput] = useState<string>("");
  const [searchDevlogInput, setSearchDevlogInput] = useState<string>("");

  const [account, setAccount] = useState<Account[]>([]);
  const [originalAccount, setOriginalAccount] = useState<Account[]>([]);

  const [accountDevlog, setAccountDevlog] = useState<AccountDevlog[]>([]);

  const [originalSelectedDevlog, setOriginalSelectedDevlog] = useState<AccountDevlog[]>([]);
  const [selectedDevlog, setSelectedDevlog] = useState<AccountDevlog[]>([]);

  const [userRole, setUserRole] = useState<string | null>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (msg: string) => {
    api.info({
      message: msg,
      placement: "topRight",
      duration: 2,
      style: {
        width: 400,
        borderRadius: 10,
      },
    });
  };

  useAuthGuard([UserRole.Admin, UserRole.HR, UserRole.Leader]);

  const openModal = (devlog: AccountDevlog[]) => {
    if (devlog.length === 0) {
      openNotification("Nhân viên này chưa có dữ liệu nhập!");
      return;
    }
    setSelectedDevlog(devlog);
    setOriginalSelectedDevlog(devlog);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedDevlog([]);
    setOriginalSelectedDevlog([]);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRole = sessionStorage.getItem("userRole");
        const res = await axios.get("/api/DevlogList");
        const data = await res.data;

        setUserRole(userRole);

        setAccount(data.account);
        setOriginalAccount(data.account);

        setAccountDevlog(data.accountDevlog);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [router]);

  const handleSearchAccount = (value: string) => {
    if (!value) {
      setAccount(originalAccount);
    } else {
      setSearchAccountInput(value);
      const searchTerm = value.toLowerCase();

      const filteredAccount = originalAccount.filter(
        (acc: Account) =>
          acc.employee_work_email.includes(searchTerm) || acc.employee_name.includes(searchTerm) || acc.employee_code.includes(searchTerm)
      );

      setAccount(filteredAccount);
    }
  };

  const handleSearchAccountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchAccountInput(e.target.value);
  };

  const handleSearchDevlog = (value: string) => {
    if (!value) {
      setSelectedDevlog(originalSelectedDevlog);
    } else {
      setSearchDevlogInput(value);
      const searchTerm = value.toLowerCase();

      const filteredSelectedDevlog = originalSelectedDevlog.filter((devlog: AccountDevlog) =>
        devlog.project_name.toLowerCase().includes(searchTerm)
      );

      setSelectedDevlog(filteredSelectedDevlog);
    }
  };

  const handleSearchDevlogChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchDevlogInput(e.target.value);
  };

  const handleResetAccount = () => {
    setSearchAccountInput("");
    setAccount(originalAccount);
  };

  const handleResetSelectedDevlog = () => {
    setSearchDevlogInput("");
    setSelectedDevlog(originalSelectedDevlog);
  };

  return (
    <>
      {contextHolder}
      <div className="p-5">
        <div className="w-full rounded px-5 bg-white">
          <DevlogListTable
            userRole={userRole}
            accountData={account}
            accountDevlogData={accountDevlog}
            searchAccountInput={searchAccountInput}
            handleSearchAccount={handleSearchAccount}
            handleSearchAccountChange={handleSearchAccountChange}
            handleResetAccount={handleResetAccount}
            openModal={openModal}
          />
          <DevlogListModal
            data={selectedDevlog}
            searchDevlogInput={searchDevlogInput}
            closeModal={closeModal}
            handleSearchDevlog={handleSearchDevlog}
            handleSearchDevlogChange={handleSearchDevlogChange}
            handleResetSelectedDevlog={handleResetSelectedDevlog}
            isModalOpen={isModalOpen}
          />
        </div>
      </div>
    </>
  );
}
