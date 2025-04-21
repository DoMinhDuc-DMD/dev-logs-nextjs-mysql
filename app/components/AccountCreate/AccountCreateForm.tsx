"use client";

import { Button, DatePicker, Input, Select } from "antd";
import { ChangeEvent } from "react";

interface AccountCreateFormProps {
  options: { value: string; label: string }[];
  formValues: {
    phone_number: string;
    citizen_id: string;
  };
  disabled: boolean;
  handleNumberTypeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setSelectedRole: (selected: string) => void;
}

export default function AccountCreateForm({
  options,
  formValues,
  disabled,
  handleNumberTypeChange,
  setSelectedRole,
}: AccountCreateFormProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-y-2">
          <label className="block text-left" htmlFor="email">
            Tài khoản công ty:
          </label>
          <Input type="email" name="email" disabled={disabled} />
          <label className="block text-left" htmlFor="password">
            Mật khẩu:
          </label>
          <Input type="password" name="password" disabled={disabled} />
          <label className="block text-left mb-1" htmlFor="role">
            Phân loại vị trí:
          </label>
          <Select options={options} onChange={(selected) => setSelectedRole(selected)} disabled={disabled} />
          {/* Upload avatar image */}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="block text-left" htmlFor="employee_name">
            Họ tên nhân viên:
          </label>
          <Input name="employee_name" disabled={disabled} />
          <label className="block text-left" htmlFor="birthday">
            Ngày sinh:
          </label>
          <DatePicker name="birthday" placeholder="Chọn ngày" disabled={disabled} />
          <label className="block text-left" htmlFor="phone_number">
            Số điện thoại:
          </label>
          <Input name="phone_number" maxLength={10} value={formValues.phone_number} onChange={handleNumberTypeChange} disabled={disabled} />
          <label className="block text-left" htmlFor="citizen_id">
            CCCD/CMND:
          </label>
          <Input name="citizen_id" maxLength={12} value={formValues.citizen_id} onChange={handleNumberTypeChange} disabled={disabled} />
        </div>
      </div>
      <div className="w-30 pt-10 mx-auto">
        <Button className="w-full mx-auto" type="primary" htmlType="submit" disabled={disabled}>
          Tạo tài khoản
        </Button>
      </div>
    </>
  );
}
