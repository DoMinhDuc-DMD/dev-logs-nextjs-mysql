"use client";

import Link from "next/link";
import { Badge, Dropdown, MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BellFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import axios from "axios";

interface Notification {
  id: number;
  leader_id: number;
  employee_id: number;
  project_id: number;
  project_name: string;
  notice_count: number;
  date: string;
}

interface UserName {
  id: number;
  employee_name: string;
  employee_work_email: string;
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<UserName[]>([]);
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

  const filteredAccount = userName.filter((acc: UserName) => acc.id === Number(userId)).map((acc: UserName) => acc.employee_name);

  const filteredNotice = notification.filter((item) => item.employee_id === Number(userId));

  const items: MenuProps["items"] = filteredNotice.map((item) => ({
    key: item.id,
    label: (
      <Link href={"/main/DevlogInput"}>
        <div>{dayjs(new Date(item.date)).format("HH:mm, DD/MM/YYYY")}</div>
        <div className="text-red-500">
          Leader báo nhập devlog cho dự án {item.project_name} lần thứ {item.notice_count}!
        </div>
      </Link>
    ),
  }));

  return (
    <div className="flex">
      <div className="sidebar w-[15%] h-[100vh] bg-white transition-all duration-300 overflow-hidden">
        <div className="pt-50">
          <ul>
            <Link href="/main">
              <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Trang tổng quan</li>
            </Link>
            {/* Admin only */}
            {role === "Admin" && (
              <Link href="/main/AccountCreate">
                <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Tạo tài khoản</li>
              </Link>
            )}
            {/* Admin and HR */}
            {(role === "Admin" || role === "HR") && (
              <Link href="/main/AccountList">
                <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Danh sách tài khoản</li>
              </Link>
            )}
            {/* Admin and HR and Leader */}
            {role !== "Developer" && (
              <Link href="/main/DevlogList">
                <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Danh sách nhập devlog</li>
              </Link>
            )}
            {/* Leader only */}
            {role === "Leader" && (
              <Link href="/main/ProjectAdd">
                <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Tạo mới dự án</li>
              </Link>
            )}
            {/* Leader and Dev */}
            {(role === "Leader" || role === "Developer") && (
              <>
                <Link href="/main/ProjectList">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Danh sách dự án</li>
                </Link>
                <Link href="/main/DevlogInput">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Nhập devlogs</li>
                </Link>
                <Link href="/main/DevlogHistory">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Lịch sử nhập devlog</li>
                </Link>
                <Link href="/main/Dashboard">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Thống kê devlog</li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="content fixed ml-[15%] w-[85%] h-[100vh] bg-gray-200 transition-all duration-300">
        <div className="flex justify-between items-center w-[100%] h-12 bg-blue-300 px-6">
          <div className="flex gap-x-2 items-center">
            <div className="p-3 hover:bg-gray-400 cursor-pointer" onClick={handleToggle}>
              <MenuTwoToneIcon fontSize="small" />
            </div>
            <Link href="/main" className="p-3 cursor-pointer hover:bg-gray-400">
              Trang chủ
            </Link>
          </div>
          <div className="flex gap-x-2 items-center">
            <Dropdown
              menu={{ items, className: "custom-notification-menu" }}
              trigger={["click"]}
              placement="bottom"
              arrow={filteredNotice.length > 0}
            >
              <div className="p-3 hover:bg-gray-400 cursor-pointer">
                <Badge count={filteredNotice.length} size="small">
                  <BellFilled style={{ fontSize: 20 }} />
                </Badge>
              </div>
            </Dropdown>

            <Link href="/main/AccountSetting" className="w-[150px] text-center p-3 cursor-pointer hover:bg-gray-400">
              {filteredAccount}
            </Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
