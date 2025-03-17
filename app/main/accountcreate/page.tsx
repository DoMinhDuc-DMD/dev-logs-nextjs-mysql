"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import Select from "react-select";

export default function CreateAccount() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      const userRole = sessionStorage.getItem("userRole");
      const loggedIn = sessionStorage.getItem("isLogin");

      if (!loggedIn) {
        router.replace("/auth");
      } else if (userRole !== "Admin") {
        router.replace("/main/notyourright");
      }
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
      <div className="flex flex-col gap-y-1">
        <label className="block text-left" htmlFor="email">
          Account
        </label>
        <input className="px-3 py-2 border rounded" placeholder="Enter email" type="email" name="email" />
        <label className="block text-left" htmlFor="password">
          Password
        </label>
        <input className="px-3 py-2 border rounded" placeholder="Enter password" type="password" name="password" />

        <label className="block text-left" htmlFor="role">
          Select Role
        </label>
        <Select options={options} name="role" />
        {message && <p className="text-center text-red-500">{message}</p>}
        <button className="w-32 mx-auto bg-blue-300 hover:bg-blue-500 hover:text-white px-3 py-1 rounded cursor-pointer" type="submit">
          Register
        </button>
      </div>
    </form>
  );
}
