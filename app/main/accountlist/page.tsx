"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import Select from "react-select";

interface Account {
  id: number;
  email: string;
  password: string;
  role: string;
}

export default function AccountList() {
  const router = useRouter();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<{
    email: string;
    password: string;
    role: string;
  } | null>(null);

  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userRole = sessionStorage.getItem("userRole");
      const loggedIn = sessionStorage.getItem("isLogin");

      setRole(userRole);

      if (userRole !== "admin" && userRole !== "hcns") {
        router.replace("/main");
      } else if (!loggedIn) {
        router.replace("/auth/login");
      }
    }

    async function fetchAccount() {
      try {
        const res = await fetch("/main/accountlist/api", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("Không thể lấy danh sách tài khoản");
        }

        const data = await res.json();
        setAccounts(data);
      } catch (error) {
        console.log("Lỗi lấy danh sách tài khoản: ", error);
      }
    }
    fetchAccount();
  }, []);

  const roleOptions = [
    { value: "hcns", label: "Hành chính nhân sự" },
    { value: "leader", label: "Trưởng nhóm" },
    { value: "dev", label: "Developer" },
  ];

  const handleAdjust = (account: Account) => {
    setEditingId(account.id);
    setEditedData({
      email: account.email,
      password: account.password,
      role: account.role,
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEditedData((prev) => ({ ...prev!, [e.target.value]: e.target.value }));
  };

  const handleSave = () => {};

  return (
    <div className="p-5">
      <div className="w-full rounded bg-white p-4">
        <div className="h-full">
          <div className="max-h-[630px] overflow-y-auto border border-gray-300 rounded">
            <table className="w-full">
              <thead className="bg-gray-200 sticky top-0">
                {role === "admin" ? (
                  <tr>
                    <th className="border p-2 w-[10%]">ID</th>
                    <th className="border p-2 w-[25%]">Email</th>
                    <th className="border p-2 w-[25%]">Password</th>
                    <th className="border p-2 w-[20%]">Role</th>
                    <th className="border p-2 w-[20%]">Actions</th>
                  </tr>
                ) : (
                  <tr>
                    <th className="border p-2 w-[20%]">ID</th>
                    <th className="border p-2 w-[30%]">Email</th>
                    <th className="border p-2 w-[30%]">Password</th>
                    <th className="border p-2 w-[20%]">Role</th>
                  </tr>
                )}
              </thead>
              <tbody className="text-center">
                {accounts.length > 0 ? (
                  accounts.map((account, index) => (
                    <tr
                      key={`account-${index + 1}`}
                      className="hover:bg-gray-100"
                    >
                      <td className="border p-2">{index + 1}</td>
                      <td className="border p-2">
                        {editingId === account.id ? (
                          <input
                            className="border rounded w-full p-1"
                            type="email"
                            value={editedData?.email || ""}
                            onChange={handleChange}
                          />
                        ) : (
                          account.email
                        )}
                      </td>
                      <td className="border p-2">
                        {editingId === account.id ? (
                          <input
                            className="border rounded w-full p-1"
                            type="text"
                            value={editedData?.password || ""}
                            onChange={handleChange}
                          />
                        ) : (
                          "******"
                        )}
                      </td>
                      <td className="border p-2">
                        {editingId === account.id ? (
                          <select
                            name="role"
                            value={editedData?.role || ""}
                            onChange={handleChange}
                            className="border p-1 w-full"
                          >
                            <option value="hcns">Hành chính nhân sự</option>
                            <option value="leader">Leader</option>
                            <option value="dev">Developer</option>
                          </select>
                        ) : (
                          account.role
                        )}
                      </td>
                      {role === "admin" && (
                        <td className="border p-2">
                          {editingId === account.id ? (
                            <button
                              onClick={handleSave}
                              className="bg-blue-400 px-3 py-1 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={() => handleAdjust(account)}
                              className="bg-green-400 px-3 py-1 rounded cursor-pointer hover:bg-green-600 hover:text-white"
                            >
                              Adjust
                            </button>
                          )}
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="border px-2 py-1 text-center">
                      Không có dữ liệu
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
