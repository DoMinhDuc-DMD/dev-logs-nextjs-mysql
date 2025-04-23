"use client";

import SidebarLinks from "./SidebarLinks";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { UserRole } from "@/app/constant/roleAuth";

export default function Sidebar({ role }: { role: string | null }) {
  return (
    <div className="sidebar w-[15%] h-[100vh] bg-white transition-all duration-300 overflow-hidden">
      <div className="pt-50">
        <ul className="flex flex-col gap-y-2">
          <SidebarLinks
            href="/main"
            label={
              <span className="flex items-center gap-x-3">
                <HomeIcon />
                Trang chủ
              </span>
            }
          />
          {role === UserRole.Admin && (
            <SidebarLinks
              href="/main/AccountCreate"
              label={
                <span className="flex items-center gap-x-3">
                  <EditNoteIcon />
                  Tạo tài khoản mới
                </span>
              }
            />
          )}
          {(role === UserRole.Admin || role === UserRole.HR) && (
            <SidebarLinks
              href="/main/AccountList"
              label={
                <span className="flex items-center gap-x-3">
                  <ListAltIcon />
                  Danh sách tài khoản
                </span>
              }
            />
          )}
          {role !== UserRole.Developer && (
            <SidebarLinks
              href="/main/DevlogList"
              label={
                <span className="flex items-center gap-x-3">
                  <ListAltIcon />
                  Danh sách nhập devlog
                </span>
              }
            />
          )}
          {role === UserRole.Leader && (
            <SidebarLinks
              href="/main/ProjectAdd"
              label={
                <span className="flex items-center gap-x-3">
                  <EditNoteIcon />
                  Tạo dự án mới
                </span>
              }
            />
          )}
          {(role === UserRole.Leader || role === UserRole.Developer) && (
            <>
              <SidebarLinks
                href="/main/ProjectList"
                label={
                  <span className="flex items-center gap-x-3">
                    <ListAltIcon />
                    Danh sách dự án
                  </span>
                }
              />
              <SidebarLinks
                href="/main/DevlogInput"
                label={
                  <span className="flex items-center gap-x-3">
                    <EditNoteIcon />
                    Nhập devlog
                  </span>
                }
              />
              <SidebarLinks
                href="/main/DevlogHistory"
                label={
                  <span className="flex items-center gap-x-3">
                    <ScheduleIcon />
                    Lịch sử nhập devlog
                  </span>
                }
              />
              <SidebarLinks
                href="/main/Dashboard"
                label={
                  <span className="flex items-center gap-x-3">
                    <EqualizerIcon />
                    Thống kê devlog
                  </span>
                }
              />
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
