"use client";

import { Button, DatePicker } from "antd";
import RestoreIcon from "@mui/icons-material/Restore";
import Search from "antd/es/input/Search";
import { ChangeEvent } from "react";
import dayjs from "dayjs";

interface DevlogListSearchProps {
  searchInput: string;
  selectedDate: string;
  handleSelectDate: (date: dayjs.Dayjs | null) => void;
  handleSearch: (value: string) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
}

export default function DevlogListSearch({
  searchInput,
  selectedDate,
  handleSelectDate,
  handleSearch,
  handleSearchChange,
  handleReset,
}: DevlogListSearchProps) {
  return (
    <div className="flex justify-end">
      <div className="flex gap-x-5 py-5">
        <Button icon={<RestoreIcon />} onClick={handleReset}></Button>
        <DatePicker className="w-1/2" value={dayjs(selectedDate)} onChange={handleSelectDate} allowClear={false} inputReadOnly />
        <Search placeholder="Nhập từ khóa" value={searchInput} onChange={handleSearchChange} onSearch={handleSearch} enterButton />
      </div>
    </div>
  );
}
