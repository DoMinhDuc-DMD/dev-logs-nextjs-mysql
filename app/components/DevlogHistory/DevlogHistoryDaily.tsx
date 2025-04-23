"use client";

import { FAMILIAR_DATE_FORMAT, FAMILIAR_DAY_MONTH_FORMAT } from "@/app/constant/dateFormat";
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

  const getDayClassName = (day: { date: string; dayOfWeek: string }) => {
    const isToday = day.date.slice(0, 5) === dayjs(currentDate).format(FAMILIAR_DAY_MONTH_FORMAT);
    const isWeekend = day.dayOfWeek === "T7" || day.dayOfWeek === "CN";
    if (isToday) return "bg-blue-300";
    if (isWeekend) return "bg-gray-200";
    return "";
  };

  return (
    <div className={`grid ${gridCols}`}>
      {daysArray.map((day, index: number) => {
        const dailyLogs = devlogList
          .filter((devlog: DevlogHistory) => dayjs(devlog.date).format(FAMILIAR_DATE_FORMAT) === day.date)
          .sort((a: DevlogHistory, b: DevlogHistory) => a.task_name_index - b.task_name_index);

        return (
          <div key={index} className="grid grid-rows-9">
            <div className={`flex border items-center justify-center font-semibold ${getDayClassName(day)}`}>{day.date.slice(0, 5)}</div>
            <div className={`flex border items-center justify-center font-semibold ${getDayClassName(day)}`}>{day.dayOfWeek}</div>
            {[...Array(6)].map((_, taskIndex: number) => {
              const totalHoursForTask = dailyLogs
                .filter((log: DevlogHistory) => log.task_name_index === taskIndex + 1)
                .reduce((sum: number, log: DevlogHistory) => sum + log.hours, 0);
              return (
                <div key={taskIndex} className={`flex border items-center justify-center ${getDayClassName(day)}`}>
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
