"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales } from "chart.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import axios from "axios";

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

export default function Main() {
  const router = useRouter();
  const [devlogList, setDevlogList] = useState([]);

  const currentMonth = dayjs().month() + 1;
  const currentYear = dayjs().year();
  const daysInMonth = dayjs(`${currentYear}-${currentMonth}`).daysInMonth();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    const date = dayjs(`${currentYear}-${currentMonth}-${i + 1}`).format("DD/MM");
    return date;
  });

  const dataHour = Array(daysInMonth).fill(0);
  devlogList.forEach((data: any) => {
    const formattedDate = dayjs(data.date).format("DD/MM");
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

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }
    if (userRole !== "Developer" && userRole !== "Leader") {
      router.replace("/main/notyourright");
    }

    async function fetchDevlog() {
      try {
        const res = await axios.get("/apis/dashboard");

        const data = await res.data;
        const filteredData = data.filter((devlog: any) => devlog.account_id === Number(userId));

        setDevlogList(filteredData);
      } catch (error) {
        console.log("Lỗi lấy dữ liệu: ", error);
      }
    }
    fetchDevlog();
  }, []);

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
