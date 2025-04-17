"use client";

import { DevlogHistory } from "@/app/main/DevlogHistory/page";
import dayjs from "dayjs";

interface DevlogHistoryDailyProps {
  daysArray: { date: string; dayOfWeek: string }[];
  devlogList: DevlogHistory[];
  selectedMonth: string;
}

export default function DevlogHistoryDaily({ daysArray, devlogList, selectedMonth }: DevlogHistoryDailyProps) {
  const currentDate = new Date();
  const daysInMonth = dayjs(`${selectedMonth}`).daysInMonth();
  const gridCols =
    {
      28: "grid-cols-28",
      29: "grid-cols-29",
      30: "grid-cols-30",
      31: "grid-cols-31",
    }[daysInMonth] || "grid-cols-31";

  return (
    <div className={`grid ${gridCols}`}>
      {daysArray.map((day, index: number) => {
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
  );
}
