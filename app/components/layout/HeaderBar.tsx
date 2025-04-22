"use client";

import { Badge, Dropdown, MenuProps } from "antd";
import { BellFilled, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import dayjs from "dayjs";
import { Notification } from "@/app/main/layout";

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
        <div className="p-3 hover:bg-gray-400 cursor-pointer" onClick={handleToggle}>
          <MenuOutlined />
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
        <Link href="/main/AccountSetting" className="w-[200px] text-center p-3 cursor-pointer hover:bg-gray-400">
          {filteredAccount}
        </Link>
      </div>
    </div>
  );
}
