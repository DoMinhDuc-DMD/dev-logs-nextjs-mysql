"use client";

import { Button } from "antd";
import RestoreIcon from "@mui/icons-material/Restore";
import Search from "antd/es/input/Search";
import { ChangeEvent } from "react";

interface AccountListSearchProps {
  searchInput: string;
  handleReset: () => void;
  handleSearch: (value: string) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function AccountListSearch({ searchInput, handleReset, handleSearch, handleSearchChange }: AccountListSearchProps) {
  return (
    <div className="flex py-5 gap-x-5 justify-end">
      <Button icon={<RestoreIcon />} onClick={handleReset}></Button>
      <Search
        placeholder="Input search text"
        value={searchInput}
        style={{ width: "25%" }}
        onChange={handleSearchChange}
        onSearch={handleSearch}
        enterButton
      />
    </div>
  );
}
