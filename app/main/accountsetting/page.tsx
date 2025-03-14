"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AccountSetting() {
  const router = useRouter();
  const [info, setInfo] = useState({
    employee_code: "",
    employee_name: "",
    employee_birthday: "",
    employee_bank_account: "",
    employee_private_email: "",
    employee_phone_number: "",
    employee_citizen_identification: "",
    employee_work_email: "",
    employee_work_password: "",
    employee_license_plate: "",
    role: "",
  });

  useEffect(() => {
    async function fetchInfo() {
      try {
        const userId = sessionStorage.getItem("userId");
        if (!userId) {
          router.replace("/auth/login");
          return;
        }

        const res = await fetch(`/main/accountsetting/api?userId=${userId}`, {
          method: "GET",
        });

        if (!res.ok) {
          throw new Error("Lỗi lấy thông tin tài khoản");
        }

        const data = await res.json();
        if (!data || Object.keys(data).length === 0)
          throw new Error("Dữ liệu không hợp lệ");

        setInfo(data);
      } catch (error) {
        console.log("Lỗi lấy thông tin tài khoản: ", error);
      }
    }
    fetchInfo();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const userId = sessionStorage.getItem("userId");
      if (!userId) {
        router.replace("/auth/login");
        return;
      }

      await fetch("/main/accountsetting/api", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...info, userId }),
      });
      alert("Cập nhật thông tin tài khoản thành công!");
    } catch (error) {
      console.log("Lỗi cập nhật thông tin tài khoản: ", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("isLogin");
    router.replace("/auth");
  };

  return (
    <div className="p-5">
      <div className="rounded bg-white text-center py-5">
        <p>Account Setting</p>
        <div className="w-[60%] mx-auto grid grid-cols-2 p-5 text-left gap-10">
          <div>
            <label htmlFor="employee_id">Mã nhân viên:</label>
            <input
              name="employee_id"
              className="w-full border rounded p-2 mb-2"
              type="text"
              value={info?.employee_code || ""}
              readOnly
            />
            <label htmlFor="role">Chức vụ/Vị trí:</label>
            <input
              name="role"
              className="w-full border rounded p-2 mb-2"
              type="text"
              value={info?.role || ""}
              readOnly
            />
            <label htmlFor="employee_name">Họ và tên:</label>
            <input
              name="employee_name"
              className="w-full border rounded p-2 mb-2"
              type="text"
              value={info?.employee_name || ""}
              onChange={handleChange}
            />
            <label htmlFor="employee_birthday">Ngày sinh:</label>
            <input
              name="employee_birthday"
              className="w-full border rounded p-2 mb-2"
              type="date"
              value={
                info?.employee_birthday
                  ? new Date(info.employee_birthday).toISOString().split("T")[0]
                  : ""
              }
              onChange={handleChange}
            />
            <label htmlFor="employee_bank_account">Số tài khoản TCB:</label>
            <input
              name="employee_bank_account"
              className="w-full border rounded p-2 mb-2"
              type="text"
              value={info?.employee_bank_account || ""}
              onChange={handleChange}
            />
            <label htmlFor="employee_private_email">Email cá nhân:</label>
            <input
              name="employee_private_email"
              className="w-full border rounded p-2 mb-2"
              type="text"
              value={info?.employee_private_email || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="employee_phone_number">Số điện thoại:</label>
            <input
              name="employee_phone_number"
              className="w-full border rounded p-2 mb-2"
              type="text"
              value={info?.employee_phone_number || ""}
              onChange={handleChange}
            />
            <label htmlFor="employee_citizen_identification">CCCD/CMND:</label>
            <input
              name="employee_citizen_identification"
              className="w-full border rounded p-2 mb-2"
              type="text"
              value={info?.employee_citizen_identification || ""}
              onChange={handleChange}
            />
            <label htmlFor="employee_work_email">Email:</label>
            <input
              name="employee_work_email"
              className="w-full border rounded p-2 mb-2"
              type="text"
              placeholder="example@vikmail.com"
              value={info?.employee_work_email || ""}
              onChange={handleChange}
            />
            <label htmlFor="employee_work_password">Mật khẩu:</label>
            <input
              name="employee_work_password"
              className="w-full border rounded p-2 mb-2"
              type="text"
              value={info?.employee_work_password || ""}
              onChange={handleChange}
            />
            <label htmlFor="employee_license_plates">Biển số xe:</label>
            <input
              name="employee_license_plates"
              className="w-full border rounded p-2 mb-2"
              type="text"
              value={info?.employee_license_plate || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-x-3 justify-center w-full">
          <button
            onClick={handleUpdate}
            className="bg-blue-400 p-2 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            Update
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-400 p-2 rounded cursor-pointer hover:bg-red-600 hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
