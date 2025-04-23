"use client";

import { GET_MONTH_FORMAT } from "@/app/constant/dateFormat";
import { DevlogHistory } from "@/app/main/DevlogHistory/page";
import dayjs from "dayjs";

interface DevlogHistorySumsProps {
  devlogList: DevlogHistory[];
  selectedMonth: string;
}

export default function DevlogHistorySums({ devlogList, selectedMonth }: DevlogHistorySumsProps) {
  return (
    <div className="grid grid-rows-9 bg-gray-400" style={{ position: "sticky", right: 0, zIndex: 10 }}>
      <div className="flex border items-center justify-center font-semibold">Tổng</div>
      {[...Array(7)].map((_, taskIndex) => {
        const totalHoursForTask = devlogList
          .filter((log: DevlogHistory) => dayjs(log.date).format(GET_MONTH_FORMAT) === `${selectedMonth}`)
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
          .filter((log: DevlogHistory) => dayjs(log.date).format(GET_MONTH_FORMAT) === `${selectedMonth}`)
          .reduce((sum, log: DevlogHistory) => sum + log.hours, 0)}
      </div>
    </div>
  );
}
