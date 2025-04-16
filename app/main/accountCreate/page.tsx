"use client";

import useAuthGuard from "@/app/hooks/useAuthGuard";
import { Button, Input, notification, Select } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";

export default function CreateAccount() {
  const router = useRouter();
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
  const [selectedRole, setSelectedRole] = useState<string>();
  const [api, contextHolder] = notification.useNotification();
  const [disabled, setDisabled] = useState(false);

  const openNotification = (msg: string, stt: number) => {
    stt === 201
      ? api.success({
          message: msg,
          placement: "topRight",
          duration: 2,
          style: {
            width: 400,
            borderRadius: 10,
          },
        })
      : api.error({
          message: msg,
          placement: "topRight",
          duration: 2,
          style: {
            width: 400,
            borderRadius: 10,
          },
        });
  };

  useAuthGuard(["Admin"]);

  useEffect(() => {
    async function fetchRoles() {
      try {
        const res = await axios.get("/api/accountCreate");
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
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post("/api/accountCreate", { email, password, role: selectedRole });
      openNotification(res.data.message, res.data.status);

      if (res.data.status === 201) {
        setDisabled(true);
        setTimeout(() => {
          router.push("/main/accountList");
        }, 1000);
      }
    } catch (error) {
      console.error("Lỗi tạo tài khoản: ", error);
    }
  }

  return (
    <>
      {contextHolder}
      <form className="w-130 my-10 mx-auto rounded bg-white p-5 shadow-lg w-[400px]" onSubmit={handleSubmit}>
        <h2 className="text-center text-xl font-semibold mb-5">Register New Account</h2>
        <div className="flex flex-col gap-y-4">
          <label className="block text-left" htmlFor="email">
            Account
          </label>
          <Input style={{ padding: 10 }} placeholder="Enter email" type="email" name="email" disabled={disabled} />
          <label className="block text-left" htmlFor="password">
            Password
          </label>
          <Input style={{ padding: 10 }} placeholder="Enter password" type="password" name="password" disabled={disabled} />
          <label className="block text-left" htmlFor="role">
            Select Role
          </label>
          <Select
            options={options}
            placeholder="Select role"
            style={{ height: 43 }}
            onChange={(selected) => setSelectedRole(selected)}
            disabled={disabled}
          />
          <Button className="w-30 py-2 mx-auto" type="primary" htmlType="submit" disabled={disabled}>
            Register
          </Button>
        </div>
      </form>
    </>
  );
}
