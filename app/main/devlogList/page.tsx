"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import dayjs from "dayjs";
import "@ant-design/v5-patch-for-react-19";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import DevlogListModal from "../../components/DevlogList/DevlogListModal";
import DevlogListTable from "../../components/DevlogList/DevlogListTable";
import DevlogListSearch from "../../components/DevlogList/DevlogListSearch";

export interface DevlogList {
  id: number;
  account_id: number;
  date: string;
  employee_code: string;
  employee_work_email: string;
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
  const [data, setData] = useState<DevlogList[]>([]);
  const [originalData, setOriginalData] = useState([]);
  const [selectedDevlog, setSelectedDevlog] = useState<DevlogList | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState(dayjs(new Date()).format("YYYY-MM-DD"));

  const openModal = (devlog: DevlogList) => {
    setSelectedDevlog(devlog);
  };
  const closeModal = () => {
    setSelectedDevlog(null);
  };

  useAuthGuard(["Admin", "HR", "Leader"]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");

    const fetchData = async () => {
      try {
        const res = await axios.get("/api/DevlogList");
        const data = await res.data;

        const filteredDevlogs = data.devlogs.filter(
          (item: DevlogList) =>
            dayjs(item.date).format("YYYY-MM-DD") === selectedDate &&
            data.leaderProjects.some(
              (project: DevlogList) => project.account_id === Number(userId) && project.project_id === item.project_id
            )
        );

        setData(filteredDevlogs);
        setOriginalData(filteredDevlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [router, selectedDate]);

  const handleSelectDate = (date: dayjs.Dayjs | null) => {
    setSelectedDate(dayjs(date).format("YYYY-MM-DD"));
    setSearchInput("");
  };

  const handleSearch = (value: string) => {
    if (!value) {
      setData(originalData);
    } else {
      setSearchInput(value);
      const searchTerm = value.toLowerCase();

      const filteredDevlogs = originalData.filter(
        (devlog: DevlogList) =>
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
    setSelectedDate(dayjs(new Date()).format("YYYY-MM-DD"));
    setData(originalData);
  };

  return (
    <div className="p-5">
      <div className="w-full rounded px-5 bg-white">
        <DevlogListSearch
          searchInput={searchInput}
          selectedDate={selectedDate}
          handleSelectDate={handleSelectDate}
          handleSearch={handleSearch}
          handleSearchChange={handleSearchChange}
          handleReset={handleReset}
        />
        <DevlogListTable data={data} openModal={openModal} />
        <DevlogListModal selectedDevlog={selectedDevlog} closeModal={closeModal} />
      </div>
    </div>
  );
}
