"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderBar from "../components/layout/HeaderBar";
import Sidebar from "../components/layout/Sidebar";

export interface Notification {
  id: number;
  leader_id: number;
  employee_id: number;
  project_id: number;
  project_name: string;
  notice_count: number;
  date: string;
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<
    {
      id: number;
      employee_name: string;
      employee_work_email: string;
    }[]
  >([]);
  const [notification, setNotification] = useState<Notification[]>([]);

  const handleToggle = () => {
    const content = document.querySelector(".content") as HTMLElement;
    const isFullWidth = content.classList.contains("w-full");

    if (isFullWidth) {
      content.classList.remove("w-full");
      content.classList.add("ml-[15%]", "w-[85%]");
    } else {
      content.classList.remove("ml-[15%]", "w-[85%]");
      content.classList.add("w-full");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = sessionStorage.getItem("isLogin");
      const userRole = sessionStorage.getItem("userRole");
      const userId = sessionStorage.getItem("userId");
      setUserId(userId);

      if (!loggedIn) {
        router.replace("/Auth");
      } else {
        setRole(userRole);
      }
    }

    async function fetchData() {
      const res = await axios.get("/api/Layout");

      setUserName(res.data.accounts);
      setNotification(res.data.notices);
    }
    fetchData();
  }, [router]);

  const filteredAccount = userName.filter((acc) => acc.id === Number(userId)).map((acc) => acc.employee_name);
  const filteredNotice = notification.filter((item) => item.employee_id === Number(userId));

  return (
    <div className="flex">
      <Sidebar role={role} />
      <div className="content fixed ml-[15%] w-[85%] h-[100vh] bg-gray-200 transition-all duration-300">
        <HeaderBar filteredNotice={filteredNotice} filteredAccount={filteredAccount} handleToggle={handleToggle} />
        {children}
      </div>
    </div>
  );
}
