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
import DevlogHistoryHeader from "@/app/components/DevlogHistory/DevlogHistoryHeader";
import { DAYS_IN_WEEK, FAMILIAR_DATE_FORMAT, GET_MONTH_FORMAT } from "@/app/constant/dateFormat";
import { UserRole } from "@/app/constant/roleAuth";

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

  useAuthGuard([UserRole.Leader, UserRole.Developer]);

  const currentMonth = dayjs().month() + 1;
  const currentYear = dayjs().year();
  const [selectedMonth, setSelectedMonth] = useState(dayjs(`${currentYear}-${currentMonth}`).format(GET_MONTH_FORMAT));

  const daysInMonth = dayjs(`${selectedMonth}`).daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    const date = dayjs(`${selectedMonth}-${i + 1}`);
    const dayIndex = date.day() === 0 ? 6 : date.day() - 1;
    const dayOfWeek = DAYS_IN_WEEK[dayIndex];

    return {
      date: date.format(FAMILIAR_DATE_FORMAT),
      dayOfWeek,
    };
  });

  const handleSelectMonth = (date: dayjs.Dayjs) => {
    setSelectedMonth(date ? date.format(GET_MONTH_FORMAT) : dayjs(`${currentYear}-${currentMonth}`).format(GET_MONTH_FORMAT));
  };

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
        <DatePicker picker="month" placeholder="Chọn tháng" onChange={handleSelectMonth} />
        <div className="h-[90%] mt-5 grid grid-cols-[20%_120%_5%] overflow-x-auto">
          <DevlogHistoryHeader userName={userName} />
          <DevlogHistoryDaily daysArray={daysArray} devlogList={devlogList} selectedMonth={selectedMonth} />
          <DevlogHistorySums devlogList={devlogList} selectedMonth={selectedMonth} />
        </div>
      </div>
    </div>
  );
}
