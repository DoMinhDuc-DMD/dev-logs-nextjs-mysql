"use client";

import useAuthGuard from "@/app/hooks/useAuthGuard";
import { Button, notification } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import AccountCreateInput from "@/app/components/AccountCreate/AccountCreateInput";
import { UserRole } from "@/app/constant/roleAuth";

export default function CreateAccount() {
  const router = useRouter();
  const [existedEmail, setExistedEmail] = useState<{ employee_work_email: string }[]>([]);
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>();
  const [formValues, setFormValues] = useState({
    phone_number: "",
    citizen_id: "",
  });
  const [api, contextHolder] = notification.useNotification();
  const [disabled, setDisabled] = useState(false);

  const openNotification = (msg: string, des: string) =>
    api.info({
      message: msg,
      description: des,
      placement: "topRight",
      duration: 2,
      style: {
        width: 350,
        borderRadius: 10,
      },
    });

  useAuthGuard([UserRole.Admin]);

  useEffect(() => {
    async function fetchRoles() {
      try {
        const res = await axios.get("/api/AccountCreate");

        setExistedEmail(res.data.account);
        setOptions(res.data.roles);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRoles();
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const getValue = (key: string) => formData.get(key)?.toString() || "";

    const email = getValue("email");
    const password = getValue("password");
    const employee_name = getValue("employee_name");
    const birthday = getValue("employee_birthday");
    const phone_number = getValue("phone_number");
    const citizen_id = getValue("citizen_id");

    const employee_code = email.replace(/@vikmail\.com$/, "") + citizen_id?.slice(-3);

    if (![email, password, selectedRole, employee_name, birthday, phone_number, citizen_id].every(Boolean)) {
      return openNotification("Thông tin nhân viên còn thiếu!", "Hãy nhập đầy đủ thông tin nhân viên!");
    }

    if (existedEmail.some((existed) => existed.employee_work_email == email)) {
      return openNotification("Email đã tồn tại!", "Vui lòng nhập email khác!");
    }

    if (!email.endsWith("@vikmail.com")) {
      return openNotification("Email không hợp lệ!", "Email công ty phải kết thúc bằng đuôi '@vikmail'!");
    }

    if (phone_number.length < 10 || !phone_number.startsWith("0")) {
      return openNotification("Số điện thoại không hợp lệ!", "Số điện thoại phải chứa 10 ký tự số, bắt đầu bằng 0!");
    }

    if (citizen_id.length < 12 || !citizen_id.startsWith("0")) {
      return openNotification("Căn cước không hợp lệ!", "Số căn cước phải chứa 12 ký tự số, bắt đầu bằng 0!");
    }

    const data = { email, password, selectedRole, employee_name, employee_code, birthday, phone_number, citizen_id };

    try {
      const res = await axios.post("/api/AccountCreate", data);
      openNotification(res.data.message, "");

      if (res.data.status === 201) {
        setDisabled(true);
        setTimeout(() => {
          router.push("/main/AccountList");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleNumberTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const onlyNumbers = value.replace(/[^0-9]/g, "");
    setFormValues((prev) => ({
      ...prev,
      [name]: onlyNumbers,
    }));
  };

  return (
    <>
      {contextHolder}
      <form className="w-[700px] my-10 mx-auto rounded bg-white p-5 shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-center text-xl font-semibold mb-5">Tạo tài khoản mới</h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-y-2">
            <AccountCreateInput name="email" label="Tài khoản công ty" type="email" disabled={disabled} />
            <AccountCreateInput name="password" label="Mật khẩu" type="password" disabled={disabled} />
            <AccountCreateInput
              name="select_role"
              label="Phân loại vị trí"
              options={options}
              setSelectedRole={setSelectedRole}
              disabled={disabled}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <AccountCreateInput name="employee_name" label="Họ tên nhân viên" disabled={disabled} />
            <AccountCreateInput name="employee_birthday" label="Ngày sinh" placeholder="Chọn ngày sinh" disabled={disabled} />
            <AccountCreateInput
              name="phone_number"
              label="Số điện thoại"
              value={formValues.phone_number}
              maxLength={10}
              disabled={disabled}
              onChange={handleNumberTypeChange}
            />
            <AccountCreateInput
              name="citizen_id"
              label="CCCD/CMND"
              value={formValues.citizen_id}
              maxLength={12}
              disabled={disabled}
              onChange={handleNumberTypeChange}
            />
          </div>
        </div>
        <div className="w-30 pt-10 mx-auto">
          <Button className="w-full mx-auto" type="primary" htmlType="submit" disabled={disabled}>
            Tạo tài khoản
          </Button>
        </div>
      </form>
    </>
  );
}
