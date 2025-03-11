"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import barData from "./fakeData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Main() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLogin");
    const storedRole = sessionStorage.getItem("userRole");

    if (!loggedIn) {
      router.push("/login");
    } else {
      setIsLogin(true);
      setRole(storedRole || "");
    }
  }, []);

  if (!isLogin) return <p>Đang kiểm tra đăng nhập...</p>;
  // if (role !== "admin") return <p>Bạn không có quyền truy cập vào trang này</p>;

  return (
    <div className="p-5 flex justify-center">
      <div className="rounded bg-white text-center w-full">
        <p>Devlogs</p>
        <div className="w-full mx-auto p-3">
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}
