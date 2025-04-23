"use client";

import { DatePicker, Input, Select } from "antd";

interface CreateInputProps {
  label?: string;
  name: string;
  type?: string;
  value?: string;
  maxLength?: number;
  placeholder?: string;
  options?: { value: string; label: string }[];
  disabled: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedRole?: (selected: string) => void;
}

export default function CreateInput({
  label,
  name,
  type,
  value,
  maxLength,
  options,
  placeholder,
  disabled,
  onChange,
  setSelectedRole,
}: CreateInputProps) {
  if (name === "employee_birthday") {
    return (
      <>
        <label htmlFor={name}>{label}:</label>
        <DatePicker name={name} placeholder={placeholder} disabled={disabled} />
      </>
    );
  } else if (name === "select_role") {
    return (
      <>
        <label className="block text-left mb-1" htmlFor="role">
          Phân loại vị trí:
        </label>
        <Select options={options} onChange={(selected) => setSelectedRole?.(selected)} disabled={disabled} />
      </>
    );
  }
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <Input name={name} type={type} value={value} maxLength={maxLength} disabled={disabled} onChange={onChange} />
    </>
  );
}
