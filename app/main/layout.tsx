"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  const handleToggle = () => {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    sidebar?.classList.toggle("hidden");
    content?.classList.toggle("w-[100%]");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = sessionStorage.getItem("isLogin");
      const userRole = sessionStorage.getItem("userRole");
      const userName = sessionStorage.getItem("userName");
      setUserName(userName);

      if (!loggedIn) {
        router.replace("/auth");
      } else {
        setRole(userRole);
      }
    }
  }, []);

  return (
    <div className="flex">
      <div className="sidebar w-[15%] h-[100vh] bg-white">
        <div className="pt-50">
          <ul>
            <Link href="/main">
              <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Trang tổng quan</li>
            </Link>

            {/* Admin only */}
            {role === "Admin" && (
              <Link href="/main/accountcreate">
                <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Tạo tài khoản</li>
              </Link>
            )}

            {/* Admin and HCNS */}
            {(role === "Admin" || role === "HR") && (
              <>
                <Link href="">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Danh sách devlogs</li>
                </Link>
                <Link href="/main/accountlist">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Danh sách tài khoản</li>
                </Link>
              </>
            )}

            {/* Leader only */}
            {role === "Leader" && (
              <>
                <Link href="/main/projectadd">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Tạo mới dự án</li>
                </Link>
                <Link href="">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Danh sách devlog</li>
                </Link>
              </>
            )}

            {/* Leader and Dev */}
            {(role === "Leader" || role === "Developer") && (
              <>
                <Link href="/main/projectlist">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Danh sách dự án</li>
                </Link>
              </>
            )}

            {/* Dev only */}
            {role === "Developer" && (
              <>
                <Link href="/main/devloginput">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Nhập devlogs</li>
                </Link>
                <Link href="/main/devloghistory">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Lịch sử devlogs</li>
                </Link>
              </>
            )}

            <Link href="/main/connect">
              <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">Connect</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="content w-[85%] h-[100vh] bg-gray-200">
        <div className="flex justify-between items-center w-[100%] h-12 bg-blue-300 px-6">
          <div className="flex gap-x-5 items-center">
            <DehazeIcon onClick={handleToggle} className="cursor-pointer hover:bg-gray-400" />
            <Link href="/main" className="p-3 cursor-pointer hover:bg-gray-400">
              Trang chủ
            </Link>
          </div>
          <div className="flex gap-x-5 items-center">
            <NotificationsIcon className="cursor-pointer hover:bg-gray-400" />
            <Link href="/main/accountsetting" className="p-3 cursor-pointer hover:bg-gray-400">
              {userName}
            </Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
