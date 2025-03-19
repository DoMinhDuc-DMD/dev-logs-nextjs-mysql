"use client";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";

export default function DevlogHistory() {
  const router = useRouter();
  const [devlogList, setDevlogList] = useState([]);
  const currentMonth = dayjs().month() + 1;
  const currentYear = dayjs().year();

  const daysInWeek = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  const daysInMonth = dayjs(`${currentYear}-${currentMonth}`).daysInMonth();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    const date = dayjs(`${currentYear}-${currentMonth}-${i + 1}`);
    const dayOfWeek = daysInWeek[date.day() === 0 ? 6 : date.day() - 1];

    return {
      date: date.format("DD/MM"),
      dayOfWeek,
    };
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userRole = sessionStorage.getItem("userRole");
      const loggedIn = sessionStorage.getItem("isLogin");
      if (!loggedIn) {
        router.replace("/auth");
      } else if (userRole !== "Developer") {
        router.replace("/main/notyourright");
      }
    }

    const userId = sessionStorage.getItem("userId");
    if (!userId) return;

    async function fetchDevlog() {
      try {
        const res = await fetch("/main/devloghistory/api");

        if (!res.ok) {
          throw new Error("Không thể lấy danh sách devlog");
        }

        const data = await res.json();
        const filteredData = data.filter((devlog: any) => devlog.account_id === Number(userId));

        setDevlogList(filteredData);
      } catch (error) {
        console.log("Lỗi lấy dữ liệu: ", error);
      }
    }
    fetchDevlog();
  }, []);

  return (
    <div className="p-5">
      <div className="w-full h-[70vh] p-5 rounded bg-white">
        <div className="h-full grid grid-cols-[20%_120%_5%] overflow-x-auto">
          <div className="grid grid-rows-9" style={{ position: "sticky", left: 0, zIndex: 10 }}>
            <div className="flex border px-5 items-center justify-center bg-blue-300">Name</div>
            <div className="flex border px-5 items-center justify-center bg-blue-200">Task</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 1</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 2</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 3</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 4</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 5</div>
            <div className="flex border px-5 items-center bg-gray-200">Task 6</div>
            <div className="flex border px-5 items-center bg-gray-400">Tổng</div>
          </div>

          <div className="grid grid-cols-31">
            {daysArray.map((day: any, index: any) => {
              const dailyLogs = devlogList
                .filter((devlog: any) => dayjs(devlog.date).format("DD/MM") === day.date)
                .sort((a: any, b: any) => a.task_name_index - b.task_name_index);

              return (
                <div key={index} className="grid grid-rows-9">
                  <div className="flex border items-center justify-center bg-blue-300">{day.date}</div>
                  <div className="flex border items-center justify-center bg-blue-200">{day.dayOfWeek}</div>

                  {[...Array(6)].map((_, taskIndex: any) => {
                    const totalHoursForTask = dailyLogs
                      .filter((log: any) => log.task_name_index === taskIndex + 1)
                      .reduce((sum: any, log: any) => sum + log.hours, 0);

                    return (
                      <div key={taskIndex} className="flex border items-center justify-center bg-gray-200">
                        {totalHoursForTask > 0 ? totalHoursForTask : ""}
                      </div>
                    );
                  })}

                  <div className="flex border items-center justify-center bg-gray-400">
                    {dailyLogs.reduce((sum: any, log: any) => sum + log.hours, 0)}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-rows-9 bg-gray-400" style={{ position: "sticky", right: 0, zIndex: 10 }}>
            <div className="flex border items-center justify-center">Tổng</div>
            {[...Array(7)].map((_, taskIndex) => {
              const totalHoursForTask = devlogList
                .filter((log: any) => log.task_name_index === taskIndex)
                .reduce((sum, log: any) => sum + log.hours, 0);

              return (
                <div key={taskIndex} className="flex border items-center justify-center">
                  {totalHoursForTask > 0 ? totalHoursForTask : ""}
                </div>
              );
            })}
            <div className="flex border items-center justify-center">
              {devlogList.reduce((sum, log: any) => sum + log.hours, 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
