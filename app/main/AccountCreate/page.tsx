"use client";

import useAuthGuard from "@/app/hooks/useAuthGuard";
import { notification } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import AccountCreateForm from "@/app/components/AccountCreate/AccountCreateForm";

export default function CreateAccount() {
  const router = useRouter();
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>();
  const [formValues, setFormValues] = useState({
    phone_number: "",
    citizen_id: "",
  });
  const [api, contextHolder] = notification.useNotification();
  const [disabled, setDisabled] = useState(false);

  const openNotification = (msg: string) =>
    api.info({
      message: msg,
      placement: "topRight",
      duration: 2,
      style: {
        width: 350,
        borderRadius: 10,
      },
    });

  useAuthGuard(["Admin"]);

  useEffect(() => {
    async function fetchRoles() {
      try {
        const res = await axios.get("/api/AccountCreate");
        const data = res.data;

        setOptions(data.roles);
      } catch (error) {
        console.error("Lỗi lấy danh sách role: ", error);
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
    const birthday = getValue("birthday");
    const phone_number = getValue("phone_number");
    const citizen_id = getValue("citizen_id");

    const employee_code = email.replace(/@vikmail\.com$/, "") + citizen_id?.slice(-3);

    if (![email, password, selectedRole, employee_name, birthday, phone_number, citizen_id].every(Boolean)) {
      return openNotification("Hãy nhập đầy đủ thông tin!");
    }

    if (email.slice(-12) !== "@vikmail.com") {
      return openNotification("Email không hợp lệ!");
    }

    if (citizen_id.length < 12) {
      return openNotification("Căn cước không hợp lệ!");
    }

    if (phone_number.length < 10) {
      return openNotification("Số điện thoại không hợp lệ!");
    }

    const data = { email, password, selectedRole, employee_name, employee_code, birthday, phone_number, citizen_id };

    try {
      const res = await axios.post("/api/AccountCreate", data);
      openNotification(res.data.message);

      if (res.data.status === 201) {
        setDisabled(true);
        setTimeout(() => {
          router.push("/main/AccountList");
        }, 1000);
      }
    } catch (error) {
      console.error("Lỗi tạo tài khoản: ", error);
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
        <AccountCreateForm
          options={options}
          formValues={formValues}
          disabled={disabled}
          handleNumberTypeChange={handleNumberTypeChange}
          setSelectedRole={setSelectedRole}
        />
      </form>
    </>
  );
}
