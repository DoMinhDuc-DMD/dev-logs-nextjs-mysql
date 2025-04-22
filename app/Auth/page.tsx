"use client";

import { Button, Input, notification } from "antd";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import axios from "axios";
import "@ant-design/v5-patch-for-react-19";

export default function LoginForm() {
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const [disabled, setDisabled] = useState(false);

  const openNotification = (msg: string, des: string) =>
    api.info({
      message: msg,
      description: des,
      placement: "topRight",
      duration: 2,
      style: {
        width: 400,
        borderRadius: 10,
      },
    });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post("/api/Auth", { email, password });
      const data = res.data;
      openNotification(data.message, data.description);

      if (data.status === 200) {
        setDisabled(true);
        sessionStorage.setItem("userId", data.userId);
        sessionStorage.setItem("isLogin", "true");
        sessionStorage.setItem("userRole", data.userRole);
        sessionStorage.setItem("userName", data.userName);

        setTimeout(() => {
          router.replace("/main");
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {contextHolder}
      <form className="w-130 mt-30 mx-auto rounded bg-white p-5 shadow-lg w-[400px]" onSubmit={handleSubmit}>
        <h2 className="text-center text-xl font-semibold mb-5">Đăng nhập hệ thống</h2>
        <div className="flex flex-col gap-y-4">
          <label className="block text-left" htmlFor="email">
            Tài khoản vikmail:
          </label>
          <Input style={{ padding: 10 }} placeholder="Nhập tài khoản vikmail" type="email" name="email" disabled={disabled} />
          <label className="block text-left" htmlFor="password">
            Mật khẩu:
          </label>
          <Input.Password style={{ padding: 10 }} placeholder="Nhập mật khẩu" type="password" name="password" disabled={disabled} />
          <Button className="w-30 py-2 mx-auto" type="primary" htmlType="submit" disabled={disabled}>
            Đăng nhập
          </Button>
        </div>
      </form>
    </>
  );
}
