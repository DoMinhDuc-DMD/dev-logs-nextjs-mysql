"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

interface Account {
  id: number;
  employee_work_email: string;
  employee_work_password: string;
  role: string;
}

export default function AccountList() {
  const router = useRouter();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<{
    employee_work_email: string;
    employee_work_password: string;
    role: string;
  } | null>(null);

  const [role, setRole] = useState<string | null>(null);

  const fetchAccount = async () => {
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
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userRole = sessionStorage.getItem("userRole");
      const loggedIn = sessionStorage.getItem("isLogin");

      setRole(userRole);

      if (userRole !== "Admin" && userRole !== "HCNS") {
        router.replace("/main/notyourright");
      } else if (!loggedIn) {
        router.replace("/auth");
      }
    }

    fetchAccount();
  }, []);

  const handleAdjust = (account: Account) => {
    setEditingId(account.id);
    setEditedData({
      employee_work_email: account.employee_work_email,
      employee_work_password: account.employee_work_password,
      role: account.role,
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEditedData((prev) => ({ ...prev!, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    if (!editingId || !editedData) return;
    try {
      await fetch("/main/accountlist/api", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          email: editedData?.employee_work_email,
          password: editedData?.employee_work_password,
          role: editedData?.role,
        }),
      });

      fetchAccount();
      setEditingId(null);
      setEditedData(null);
    } catch (error) {
      console.log("Lỗi lưu thông tin tài khoản: ", error);
    }
  };

  return (
    <div className="p-5">
      <div className="w-full rounded bg-white p-4">
        <div className="h-full">
          <div className="max-h-[630px] overflow-y-auto border border-gray-300 rounded">
            <table className="w-full">
              <thead className="bg-gray-200 sticky top-0">
                {role === "Admin" ? (
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
                            name="employee_work_email"
                            className="border rounded w-full p-1"
                            type="email"
                            value={editedData?.employee_work_email || ""}
                            onChange={handleChange}
                          />
                        ) : (
                          account.employee_work_email
                        )}
                      </td>
                      <td className="border p-2">
                        {editingId === account.id ? (
                          <input
                            name="employee_work_password"
                            className="border rounded w-full p-1"
                            type="text"
                            value={editedData?.employee_work_password || ""}
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
                            <option value="HCNS">Hành chính nhân sự</option>
                            <option value="Leader">Leader</option>
                            <option value="Dev">Developer</option>
                          </select>
                        ) : (
                          account.role
                        )}
                      </td>
                      {role === "Admin" && (
                        <td className="border p-2">
                          {editingId === account.id ? (
                            <button
                              onClick={handleSave}
                              className="bg-blue-400 px-3 py-1 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
                            >
                              Save
                            </button>
                          ) : (
                            <>
                              <button
                                onClick={() =>
                                  router.push(
                                    `/main/accountlist/accountdetail?id=${account.id}`
                                  )
                                }
                                className="bg-blue-400 px-3 py-1 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
                              >
                                Detail
                              </button>
                              <button
                                onClick={() => handleAdjust(account)}
                                className="bg-green-400 px-3 py-1 rounded cursor-pointer hover:bg-green-600 hover:text-white"
                              >
                                Adjust
                              </button>
                            </>
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
