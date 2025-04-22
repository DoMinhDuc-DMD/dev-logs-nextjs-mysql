"use client";

import SidebarLinks from "./SidebarLinks";

export default function Sidebar({ role }: { role: string | null }) {
  return (
    <div className="sidebar w-[15%] h-[100vh] bg-white transition-all duration-300 overflow-hidden">
      <div className="pt-50">
        <ul className="flex flex-col gap-y-2">
          <SidebarLinks href="/main" label="Trang tổng quan" />
          {role === "Admin" && <SidebarLinks href="/main/AccountCreate" label="Tạo tài khoản mới" />}
          {(role === "Admin" || role === "HR") && <SidebarLinks href="/main/AccountList" label="Danh sách tài khoản" />}
          {role !== "Developer" && <SidebarLinks href="/main/DevlogList" label="Danh sách nhập devlog" />}
          {role === "Leader" && <SidebarLinks href="/main/ProjectAdd" label="Tạo dự án mới" />}
          {(role === "Leader" || role === "Developer") && (
            <>
              <SidebarLinks href="/main/ProjectList" label="Danh sách dự án" />
              <SidebarLinks href="/main/DevlogInput" label="Nhập devlog" />
              <SidebarLinks href="/main/DevlogHistory" label="Lịch sử nhập devlog" />
              <SidebarLinks href="/main/Dashboard" label="Thống kê devlog" />
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
