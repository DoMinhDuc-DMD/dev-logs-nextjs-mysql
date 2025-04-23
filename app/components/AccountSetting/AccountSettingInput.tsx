"use client";

import { DatePicker, Input } from "antd";
import dayjs from "dayjs";

interface AccountSettingInputProps {
  label?: string;
  name: string;
  format?: string;
  placeholder?: string;
  valueInput?: string;
  valueDate?: dayjs.Dayjs | null;
  readOnly?: boolean;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDate?: (e: dayjs.Dayjs) => void;
}

export default function AccountSettingInput({
  label,
  name,
  format,
  placeholder,
  valueInput,
  valueDate,
  readOnly = false,
  onChangeInput,
  onChangeDate,
}: AccountSettingInputProps) {
  if (name === "employee_birthday") {
    return (
      <>
        <label htmlFor={name}>{label}:</label>
        <DatePicker name={name} format={format} placeholder={placeholder} value={valueDate} onChange={onChangeDate} className="w-full" />
      </>
    );
  }
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <Input name={name} value={valueInput || ""} onChange={onChangeInput} readOnly={readOnly} />
    </>
  );
}
