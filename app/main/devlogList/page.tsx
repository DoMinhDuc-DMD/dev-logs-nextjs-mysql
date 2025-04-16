"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import dayjs from "dayjs";
import "@ant-design/v5-patch-for-react-19";
import DevlogListModal from "../../components/devlogList/DevlogListModal";
import DevlogListTable from "../../components/devlogList/DevlogListTable";
import DevlogListSearch from "../../components/devlogList/DevlogListSearch";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import { DatePicker } from "antd";

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
  const [selectedDate, setSelectedDate] = useState(dayjs().format("YYYY-MM-DD"));

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
        const res = await axios.get("/api/devlogList");
        const data = await res.data;

        const filteredDevlogs = data.devlogData.filter(
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

  const handleSelectDate = (date: dayjs.Dayjs) => {
    setSelectedDate(date ? dayjs(date).format("YYYY-MM-DD") : dayjs(new Date()).format("YYYY-MM-DD"));
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
    setData(originalData);
  };

  return (
    <div className="p-5">
      <div className="w-full rounded px-5 bg-white">
        <div className="w-full flex py-5 justify-between">
          <DatePicker onChange={handleSelectDate} />
          <DevlogListSearch
            searchInput={searchInput}
            handleSearch={handleSearch}
            handleSearchChange={handleSearchChange}
            handleReset={handleReset}
          />
        </div>
        <DevlogListTable data={data} openModal={openModal} />
        <DevlogListModal selectedDevlog={selectedDevlog} closeModal={closeModal} />
      </div>
    </div>
  );
}
