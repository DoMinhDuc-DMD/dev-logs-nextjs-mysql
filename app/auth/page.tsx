"use client";

import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import axios from "axios";
import "@ant-design/v5-patch-for-react-19";

export default function LoginForm() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post("/api/auth", { email, password });
      const data = res.data;
      setMessage(data.message);

      sessionStorage.setItem("userId", data.userId);
      sessionStorage.setItem("isLogin", "true");
      sessionStorage.setItem("userRole", data.userRole);
      sessionStorage.setItem("userName", data.userName);

      router.replace("/main");
    } catch (error: any) {
      setMessage(error.response?.data?.message || "Login Failed!");
    }
  }

  return (
    <form className="w-130 my-10 mx-auto rounded bg-white p-5 shadow-lg w-[400px]" onSubmit={handleSubmit}>
      <h2 className="text-center text-xl font-semibold mb-5">Login System</h2>
      <div className="flex flex-col gap-y-4">
        <label className="block text-left" htmlFor="email">
          Account
        </label>
        <Input style={{ padding: 10 }} placeholder="Enter email" type="email" name="email" />
        <label className="block text-left" htmlFor="password">
          Password
        </label>
        <Input style={{ padding: 10 }} placeholder="Enter password" type="password" name="password" />
        {message && <p className="text-center text-red-500">{message}</p>}
        <Button className="w-30 py-2 mx-auto" type="primary" htmlType="submit">
          Login
        </Button>
      </div>
    </form>
  );
}
