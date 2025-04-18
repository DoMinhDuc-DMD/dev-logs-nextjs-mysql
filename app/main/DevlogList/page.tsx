"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import DevlogListModal from "../../components/DevlogList/DevlogListModal";
import DevlogListTable from "../../components/DevlogList/DevlogListTable";
import DevlogListSearch from "../../components/DevlogList/DevlogListSearch";

export interface Account {
  id: number;
  employee_code: string;
  employee_work_email: string;
  employee_name: string;
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
  const [searchInput, setSearchInput] = useState<string>("");

  const [account, setAccount] = useState<Account[]>([]);
  const [originalAccount, setOriginalAccount] = useState<Account[]>([]);

  const [accountDevlog, setAccountDevlog] = useState<AccountDevlog[]>([]);

  const [selectedDevlog, setSelectedDevlog] = useState<AccountDevlog[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (devlog: AccountDevlog[]) => {
    setSelectedDevlog(devlog);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedDevlog([]);
    setIsModalOpen(false);
  };

  useAuthGuard(["Admin", "HR", "Leader"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/DevlogList");
        const data = await res.data;

        setAccount(data.account);
        setOriginalAccount(data.account);

        setAccountDevlog(data.accountDevlog);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [router]);

  const handleSearch = (value: string) => {
    if (!value) {
      setAccount(originalAccount);
    } else {
      setSearchInput(value);
      const searchTerm = value.toLowerCase();

      const filteredAccount = originalAccount.filter(
        (acc: Account) => acc.employee_work_email.includes(searchTerm)
        // || acc.employee_code.includes(searchTerm)
      );

      setAccount(filteredAccount);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleReset = () => {
    setSearchInput("");
    setAccount(originalAccount);
  };

  return (
    <div className="p-5">
      <div className="w-full rounded px-5 bg-white">
        <DevlogListSearch
          searchInput={searchInput}
          handleSearch={handleSearch}
          handleSearchChange={handleSearchChange}
          handleReset={handleReset}
        />
        <DevlogListTable accountData={account} data={accountDevlog} openModal={openModal} />
        <DevlogListModal data={selectedDevlog} closeModal={closeModal} isModalOpen={isModalOpen} />
      </div>
    </div>
  );
}
