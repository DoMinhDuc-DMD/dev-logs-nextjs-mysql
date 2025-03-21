"use client";

import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import Select from "react-select";

export default function CreateAccount() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }
    if (userRole !== "Admin") {
      router.replace("/main/notyourright");
    }

    async function fetchRoles() {
      const res = await fetch("/main/accountcreate/api");
      const data = await res.json();
      if (data.roles && Array.isArray(data.roles)) {
        setOptions(data.roles);
      }
    }
    fetchRoles();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");

    const res = await fetch("/main/accountcreate/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    try {
      const data = await res.json();
      setMessage(data.message);
      setTimeout(() => {
        router.push("/main/accountlist");
      }, 1000);
    } catch (error) {
      setMessage("Lỗi hệ thống");
    }
  }

  return (
    <form className="w-130 my-10 mx-auto rounded bg-white p-5 shadow-lg w-[400px]" onSubmit={handleSubmit}>
      <h2 className="text-center text-xl font-semibold mb-5">Register New Account</h2>
      <div className="flex flex-col gap-y-4">
        <label className="block text-left" htmlFor="email">
          Account
        </label>
        <Input style={{ padding: 10 }} placeholder="Enter email" type="email" name="email" />
        <label className="block text-left" htmlFor="password">
          Password
        </label>
        <Input style={{ padding: 10 }} placeholder="Enter password" type="password" name="password" />
        <label className="block text-left" htmlFor="role">
          Select Role
        </label>
        <Select options={options} name="role" />
        {message && <p className="text-center text-red-500">{message}</p>}
        <Button className="w-30 py-2 mx-auto" type="primary" htmlType="submit">
          Register
        </Button>
      </div>
    </form>
  );
}
