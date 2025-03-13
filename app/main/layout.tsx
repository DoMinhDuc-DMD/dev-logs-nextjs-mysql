"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(true);

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

      if (!loggedIn) {
        router.replace("/auth/login");
      } else {
        setRole(userRole);
        setIsChecking(false);
      }
    }
  }, []);

  if (isChecking) {
    return <p>Đang kiểm tra đăng nhập...</p>;
  }

  return (
    <div className="flex">
      <div className="sidebar w-[15%] h-[100vh] bg-white">
        <div className="pt-50">
          <ul>
            <Link href="/main">
              <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
                Trang chủ{" "}
              </li>
            </Link>

            {/* Leader only */}
            {role === "leader" && (
              <Link href="/main/formaddproject">
                <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
                  Tạo mới project
                </li>
              </Link>
            )}

            {role !== "admin" && (
              <>
                <Link href="/main/formdevlogs">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
                    Nhập Devlogs
                  </li>
                </Link>

                <Link href="/main/devloglist">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
                    Devlogs list
                  </li>
                </Link>
              </>
            )}

            {/* Admin only */}
            {role === "admin" && (
              <>
                <Link href="">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
                    Employee log list
                  </li>
                </Link>
                <Link href="/main/createaccount">
                  <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
                    Tạo tài khoản
                  </li>
                </Link>
              </>
            )}

            {(role === "admin" || role === "hcns") && (
              <Link href="/main/accountlist">
                <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
                  Danh sách tài khoản
                </li>
              </Link>
            )}
            <Link href="/main/connect">
              <li className="py-2 pl-3 cursor-pointer hover:bg-gray-400">
                Connect
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="content w-[85%] h-[100vh] bg-gray-200">
        <div className="flex justify-between items-center w-[100%] h-12 bg-blue-300 px-6">
          <div className="flex gap-x-3">
            <button
              onClick={handleToggle}
              className="py-3 cursor-pointer hover:bg-gray-400"
            >
              Toggle Icon
            </button>

            <Link href="/main">
              <div className="py-3 cursor-pointer hover:bg-gray-400">
                Trang chủ
              </div>
            </Link>
          </div>
          <div className="flex gap-x-3">
            <div className="hover:bg-gray-400 py-3 cursor-pointer">
              Bell Icon
            </div>
            {isChecking ? (
              <Link href="/">
                <div className="hover:bg-gray-400 py-3 cursor-pointer">
                  Drop down
                </div>
              </Link>
            ) : (
              <Link href="/main/accountsetting">
                <div className="hover:bg-gray-400 py-3 cursor-pointer">
                  Account setting
                </div>
              </Link>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
