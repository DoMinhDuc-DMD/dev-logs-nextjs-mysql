"use client";

import { Button } from "antd";
import RestoreIcon from "@mui/icons-material/Restore";
import Search from "antd/es/input/Search";
import { ChangeEvent } from "react";

interface AccountListSearchProps {
  searchInput: string;
  handleSearch: (value: string) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
}

export default function AccountListSearch({ searchInput, handleReset, handleSearch, handleSearchChange }: AccountListSearchProps) {
  return (
    <div className="py-5">
      <h1 className="text-center text-xl pb-3 font-bold">Danh sách nhân viên công ty</h1>
      <div className="flex gap-x-5 justify-end">
        <Button icon={<RestoreIcon />} onClick={handleReset}></Button>
        <Search
          placeholder="Nhập từ khóa"
          value={searchInput}
          style={{ width: "25%" }}
          onChange={handleSearchChange}
          onSearch={handleSearch}
          enterButton
        />
      </div>
    </div>
  );
}
