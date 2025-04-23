"use client";

import { Badge, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import { Notification } from "@/app/main/layout";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface HeaderBarProps {
  filteredNotice: Notification[];
  filteredAccount: string[];
  handleToggle: () => void;
}

export default function HeaderBar({ filteredNotice, filteredAccount, handleToggle }: HeaderBarProps) {
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
    <div className="flex justify-between items-center w-[100%] h-12 bg-blue-300 px-6">
      <div className="flex gap-x-2 items-center">
        <div className="h-[48px] w-[48px] flex justify-center items-center hover:bg-gray-400 cursor-pointer" onClick={handleToggle}>
          <MenuIcon />
        </div>
        <Link href="/main" className="p-3 font-semibold cursor-pointer hover:bg-gray-400">
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
          <div className="h-[48px] w-[48px] flex justify-center items-center hover:bg-gray-400 cursor-pointer">
            <Badge count={filteredNotice.length} size="small">
              <NotificationsIcon fontSize="medium" />
            </Badge>
          </div>
        </Dropdown>
        <Link href="/main/AccountSetting" className="w-[200px] font-semibold text-center p-3 cursor-pointer hover:bg-gray-400">
          {filteredAccount}
        </Link>
      </div>
    </div>
  );
}
