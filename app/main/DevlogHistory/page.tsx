"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import { DatePicker } from "antd";
import axios from "axios";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import DevlogHistorySums from "@/app/components/DevlogHistory/DevlogHistorySums";
import DevlogHistoryDaily from "@/app/components/DevlogHistory/DevlogHistoryDaily";

export interface DevlogHistory {
  account_id: number;
  date: Date;
  hours: number;
  task_name_index: number;
}

export default function DevlogHistory() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [devlogList, setDevlogList] = useState<DevlogHistory[]>([]);

  const currentMonth = dayjs().month() + 1;
  const currentYear = dayjs().year();
  const [selectedMonth, setSelectedMonth] = useState(dayjs(`${currentYear}-${currentMonth}`).format("YYYY-MM"));

  const daysInWeek = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const daysInMonth = dayjs(`${selectedMonth}`).daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    const date = dayjs(`${selectedMonth}-${i + 1}`);
    const dayOfWeek = daysInWeek[date.day() === 0 ? 6 : date.day() - 1];

    return {
      date: date.format("DD/MM/YYYY"),
      dayOfWeek,
    };
  });

  const handleSelectDate = (date: dayjs.Dayjs) => {
    setSelectedMonth(date ? date.format("YYYY-MM") : dayjs(`${currentYear}-${currentMonth}`).format("YYYY-MM"));
  };

  useAuthGuard(["Leader", "Developer"]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    const userName = sessionStorage.getItem("userName");
    setUserName(userName || "");

    async function fetchDevlog() {
      try {
        const res = await axios.get("/api/DevlogHistory");
        const data = await res.data;
        const filteredData = data.filter((devlog: DevlogHistory) => devlog.account_id === Number(userId));

        setDevlogList(filteredData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDevlog();
  }, [router]);

  return (
    <div className="p-5">
      <div className="w-full h-[80vh] p-5 rounded bg-white">
        <DatePicker picker="month" placeholder="Chọn tháng" onChange={handleSelectDate} />
        <div className="h-[90%] mt-5 grid grid-cols-[20%_120%_5%] overflow-x-auto">
          <div className="grid grid-rows-9" style={{ position: "sticky", left: 0, zIndex: 10 }}>
            <div className="flex border px-5 items-center justify-center bg-blue-300">{userName}</div>
            <div className="flex border px-5 items-center justify-center bg-blue-200 font-bold">Tên task</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 1</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 2</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 3</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 4</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 5</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 6</div>
            <div className="flex border px-5 items-center bg-gray-400">Tổng</div>
          </div>
          <DevlogHistoryDaily daysArray={daysArray} devlogList={devlogList} selectedMonth={selectedMonth} />
          <DevlogHistorySums devlogList={devlogList} selectedMonth={selectedMonth} />
        </div>
      </div>
    </div>
  );
}
