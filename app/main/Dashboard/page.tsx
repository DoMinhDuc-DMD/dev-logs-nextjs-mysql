"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import axios from "axios";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import { FAMILIAR_DAY_MONTH_FORMAT } from "@/app/constant/dateFormat";
import { UserRole } from "@/app/constant/roleAuth";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarData {
  labels: string[];
  categoryPercentage: number;
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

interface DevlogList {
  account_id: number;
  date: Date;
  total_hours: number;
}

export default function Main() {
  const router = useRouter();
  const [devlogList, setDevlogList] = useState<DevlogList[]>([]);

  useAuthGuard([UserRole.Leader, UserRole.Developer]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");

    async function fetchDevlog() {
      try {
        const res = await axios.get("/api/Dashboard");

        const data = await res.data;
        const filteredData = data.filter((devlog: { account_id: number }) => devlog.account_id === Number(userId));
        setDevlogList(filteredData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDevlog();
  }, [router]);

  const currentMonth = dayjs().month() + 1;
  const currentYear = dayjs().year();
  const daysInMonth = dayjs(`${currentYear}-${currentMonth}`).daysInMonth();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    const date = dayjs(`${currentYear}-${currentMonth}-${i + 1}`).format(FAMILIAR_DAY_MONTH_FORMAT);
    return date;
  });

  const dataHour = Array(daysInMonth).fill(0);
  devlogList.forEach((data: DevlogList) => {
    const formattedDate = dayjs(data.date).format(FAMILIAR_DAY_MONTH_FORMAT);
    const index = daysArray.indexOf(formattedDate);

    if (index !== -1) {
      dataHour[index] = data.total_hours;
    }
  });

  const devlogData: BarData = {
    labels: daysArray,
    categoryPercentage: 2,
    datasets: [
      {
        label: "Effective",
        data: dataHour,
        backgroundColor: "oklch(0.81 0.1 250.46)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 12,
      },
    },
  };

  return (
    <div className="p-5 flex justify-center">
      <div className="w-full rounded-xl bg-white text-center w-full">
        <p>Devlogs</p>
        <div className="h-[50vh] mx-auto p-3">
          <Bar options={options} data={devlogData} />
        </div>
      </div>
    </div>
  );
}
