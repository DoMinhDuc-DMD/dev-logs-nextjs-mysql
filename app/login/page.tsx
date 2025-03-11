"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AccountForm() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("/login/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    try {
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || "Login Failed!");
        return;
      }
      setMessage(data.message);

      sessionStorage.setItem("userId", data.userId);
      sessionStorage.setItem("isLogin", "true");
      sessionStorage.setItem("userRole", data.role);

      window.location.href = "/main";
    } catch (error) {
      setMessage("Error processing request.");
    }
  }

  return (
    <form
      className="w-130 my-5 mx-auto rounded bg-white p-5 shadow-lg w-[400px]"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center text-xl font-semibold mb-5">Login Form</h2>
      <div className="flex flex-col gap-y-1">
        <label className="block text-left" htmlFor="email">
          Account
        </label>
        <input
          className="px-3 py-2 border rounded"
          placeholder="Enter email"
          type="email"
          name="email"
        />
        <label className="block text-left" htmlFor="password">
          Password
        </label>
        <input
          className="px-3 py-2 border rounded"
          placeholder="Enter password"
          type="password"
          name="password"
        />
        {message && <p className="text-center text-red-500">{message}</p>}
        <button
          className="w-32 mx-auto bg-blue-300 hover:bg-blue-500 hover:text-white px-3 py-1 rounded cursor-pointer"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
}
