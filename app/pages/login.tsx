"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function AccountForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="p-5 w-130 mx-auto">
      <form
        className="rounded bg-white p-5 shadow-lg w-[400px]"
        onSubmit={handleLogin}
      >
        <h2 className="text-center text-xl font-semibold mb-5">Login Form</h2>
        <div className="flex flex-col gap-y-3">
          <div>
            <label className="block text-left mb-1" htmlFor="email">
              Account
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter email"
              type="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div>
            <label className="block text-left mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-32 bg-blue-300 hover:bg-blue-500 hover:text-white px-3 py-1 rounded cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
