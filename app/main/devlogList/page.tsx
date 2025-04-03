"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import dayjs from "dayjs";
import "@ant-design/v5-patch-for-react-19";
import DevlogListModal from "../../../components/devlogList/DevlogListModal";
import DevlogListTable from "../../../components/devlogList/DevlogListTable";
import DevlogListSearch from "../../../components/devlogList/DevlogListSearch";

export default function DevlogList() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const date = dayjs(new Date()).format("DD-MM-YYYY");
  const [selectedDevlog, setSelectedDevlog] = useState<any>(null);
  const [searchInput, setSearchInput] = useState<string>("");

  const openModal = (devlog: any) => {
    setSelectedDevlog(devlog);
  };
  const closeModal = () => {
    setSelectedDevlog(null);
  };

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }
    if (userRole !== "Leader") {
      router.replace("/main/notYourRight");
    }

    const fetchData = async () => {
      try {
        const res = await axios.get("/api/devlogList");
        const data = await res.data;

        const filteredDevlogs = data.devlogs.filter(
          (item: any) =>
            dayjs(item.date).format("DD-MM-YYYY") === date &&
            data.leaderProjects.some((project: any) => project.account_id === Number(userId) && project.project_id === item.project_id)
        );
        setData(filteredDevlogs);
        setOriginalData(filteredDevlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (value: string) => {
    if (!value) {
      setData(originalData);
    } else {
      setSearchInput(value);
      const searchTerm = value.toLowerCase();

      const filteredDevlogs = originalData.filter(
        (devlog: any) =>
          devlog.employee_work_email.includes(searchTerm) ||
          devlog.employee_code.includes(searchTerm) ||
          devlog.project_name.includes(searchTerm) ||
          devlog.task_name.includes(searchTerm)
      );

      setData(filteredDevlogs);
    }
  };
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const handleReset = () => {
    setSearchInput("");
    setData(originalData);
  };

  return (
    <div className="p-5">
      <div className="w-full rounded px-5 bg-white">
        <DevlogListSearch searchInput={searchInput} handleSearch={handleSearch} handleSearchChange={handleSearchChange} handleReset={handleReset} />
        <DevlogListTable data={data} openModal={openModal} />
        <DevlogListModal selectedDevlog={selectedDevlog} closeModal={closeModal} />
      </div>
    </div>
  );
}
