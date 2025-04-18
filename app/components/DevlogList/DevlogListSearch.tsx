"use client";

import { Button } from "antd";
import RestoreIcon from "@mui/icons-material/Restore";
import Search from "antd/es/input/Search";
import { ChangeEvent } from "react";

interface DevlogListSearchProps {
  searchInput: string;
  handleSearch: (value: string) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
}

export default function DevlogListSearch({ searchInput, handleSearch, handleSearchChange, handleReset }: DevlogListSearchProps) {
  return (
    <div className="flex justify-end">
      <div className="flex gap-x-5 py-5">
        <Button icon={<RestoreIcon />} onClick={handleReset}></Button>
        <Search placeholder="Nhập từ khóa" value={searchInput} onChange={handleSearchChange} onSearch={handleSearch} enterButton />
      </div>
    </div>
  );
}
