"use client";

import { Input } from "antd";

interface AccountDetailInputProps {
  label: string;
  value: string;
}

export default function AccountDetailInput({ label, value }: AccountDetailInputProps) {
  return (
    <>
      <label htmlFor={value}>{label}:</label>
      <Input name={value} value={value || ""} readOnly />
    </>
  );
}
