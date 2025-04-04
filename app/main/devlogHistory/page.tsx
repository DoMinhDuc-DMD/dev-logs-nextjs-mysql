"use client";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import { DatePicker } from "antd";
import axios from "axios";

interface DevlogHistory {
  account_id: number;
  date: Date;
  hours: number;
  task_name_index: number;
}

export const dynamic = "force-dynamic";

export default function DevlogHistory() {
  const router = useRouter();
  const [devlogList, setDevlogList] = useState<DevlogHistory[]>([]);

  const currentDate = new Date();
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

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }
    if (userRole !== "Developer" && userRole !== "Leader") {
      router.replace("/main/notYourRight");
    }

    async function fetchDevlog() {
      try {
        const res = await axios.get("http://localhost:3000/api/devlogHistory");
        const data = await res.data;
        const filteredData = data.filter((devlog: DevlogHistory) => devlog.account_id === Number(userId));

        setDevlogList(filteredData);
      } catch (error) {
        console.log("Lỗi lấy dữ liệu: ", error);
      }
    }
    fetchDevlog();
  }, [router]);

  const gridCols =
    {
      28: "grid-cols-28",
      29: "grid-cols-29",
      30: "grid-cols-30",
      31: "grid-cols-31",
    }[daysInMonth] || "grid-cols-31";

  return (
    <div className="p-5">
      <div className="w-full h-[80vh] p-5 rounded bg-white">
        <DatePicker picker="month" onChange={handleSelectDate} />
        <div className="h-[90%] mt-5 grid grid-cols-[20%_120%_5%] overflow-x-auto">
          <div className="grid grid-rows-9" style={{ position: "sticky", left: 0, zIndex: 10 }}>
            <div className="flex border px-5 items-center justify-center bg-blue-300">Name</div>
            <div className="flex border px-5 items-center justify-center bg-blue-200 font-bold">Tên task</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 1</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 2</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 3</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 4</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 5</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 6</div>
            <div className="flex border px-5 items-center bg-gray-400">Tổng</div>
          </div>
          <div className={`grid ${gridCols}`}>
            {daysArray.map((day: { date: string; dayOfWeek: string }, index: number) => {
              const dailyLogs = devlogList
                .filter((devlog: DevlogHistory) => dayjs(devlog.date).format("DD/MM/YYYY") === day.date)
                .sort((a: DevlogHistory, b: DevlogHistory) => a.task_name_index - b.task_name_index);

              return (
                <div key={index} className="grid grid-rows-9">
                  <div
                    className={`flex border items-center justify-center font-semibold ${
                      (day.date.slice(0, 5) === dayjs(currentDate).format("DD/MM") && "bg-blue-300") ||
                      ((day.dayOfWeek === "T7" || day.dayOfWeek === "CN") && `bg-gray-200`)
                    }`}
                  >
                    {day.date.slice(0, 5)}
                  </div>
                  <div
                    className={`flex border items-center justify-center font-semibold ${
                      (day.date.slice(0, 5) === dayjs(currentDate).format("DD/MM") && "bg-blue-300") ||
                      ((day.dayOfWeek === "T7" || day.dayOfWeek === "CN") && `bg-gray-200`)
                    }`}
                  >
                    {day.dayOfWeek}
                  </div>
                  {[...Array(6)].map((_, taskIndex: number) => {
                    const totalHoursForTask = dailyLogs
                      .filter((log: DevlogHistory) => log.task_name_index === taskIndex + 1)
                      .reduce((sum: number, log: DevlogHistory) => sum + log.hours, 0);
                    return (
                      <div
                        key={taskIndex}
                        className={`flex border items-center justify-center ${
                          (day.date.slice(0, 5) === dayjs(currentDate).format("DD/MM") && "bg-blue-300") ||
                          ((day.dayOfWeek === "T7" || day.dayOfWeek === "CN") && `bg-gray-200`)
                        }`}
                      >
                        {totalHoursForTask > 0 ? totalHoursForTask : ""}
                      </div>
                    );
                  })}
                  <div className="flex border items-center justify-center bg-gray-400">
                    {dailyLogs.reduce((sum: number, log: DevlogHistory) => sum + log.hours, 0)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-rows-9 bg-gray-400" style={{ position: "sticky", right: 0, zIndex: 10 }}>
            <div className="flex border items-center justify-center font-semibold">Tổng</div>
            {[...Array(7)].map((_, taskIndex) => {
              const totalHoursForTask = devlogList
                .filter((log: DevlogHistory) => dayjs(log.date).format("YYYY-MM") === `${selectedMonth}`)
                .filter((log: DevlogHistory) => log.task_name_index === taskIndex)
                .reduce((sum, log: DevlogHistory) => sum + log.hours, 0);

              return (
                <div key={taskIndex} className="flex border items-center justify-center">
                  {totalHoursForTask > 0 ? totalHoursForTask : ""}
                </div>
              );
            })}
            <div className="flex border items-center justify-center">
              {devlogList
                .filter((log: DevlogHistory) => dayjs(log.date).format("YYYY-MM") === `${selectedMonth}`)
                .reduce((sum, log: DevlogHistory) => sum + log.hours, 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
