"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AccountDetail() {
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
    if (typeof window !== "undefined") {
      const userRole = sessionStorage.getItem("userRole");
      const loggedIn = sessionStorage.getItem("isLogin");

      if (userRole !== "Admin" && userRole !== "HCNS") {
        router.replace("/main/notyourright");
      } else if (!loggedIn) {
        router.replace("/auth");
      }
    }

    const userId = new URLSearchParams(window.location.search).get("id");
    if (!userId) return;

    async function fetchInfo() {
      try {
        const res = await fetch(
          `/main/accountlist/accountdetail/api?id=${userId}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!res.ok) throw new Error("Lỗi lấy thông tin tài khoản");

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

  return (
    <div className="p-5">
      <div className="rounded bg-white text-center py-5">
        <p>Account Detail of {info?.employee_name}</p>
        <div className="w-[60%] mx-auto grid grid-cols-2 p-5 text-left gap-10">
          <div>
            <label htmlFor="employee_id">Mã nhân viên:</label>
            <input
              name="employee_id"
              className="w-full border rounded p-2 mb-2"
              type="text"
              readOnly
              value={info?.employee_code || ""}
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
              readOnly
              value={info?.employee_name || ""}
            />
            <label htmlFor="employee_birthday">Ngày sinh:</label>
            <input
              name="employee_birthday"
              className="w-full border rounded p-2 mb-2"
              type="date"
              readOnly
              value={
                info?.employee_birthday
                  ? new Date(info.employee_birthday).toISOString().split("T")[0]
                  : ""
              }
            />
            <label htmlFor="employee_bank_account">Số tài khoản TCB:</label>
            <input
              name="employee_bank_account"
              className="w-full border rounded p-2 mb-2"
              type="text"
              readOnly
              value={info?.employee_bank_account || ""}
            />
            <label htmlFor="employee_private_email">Email cá nhân:</label>
            <input
              name="employee_private_email"
              className="w-full border rounded p-2 mb-2"
              type="text"
              readOnly
              value={info?.employee_private_email || ""}
            />
          </div>
          <div>
            <label htmlFor="employee_phone_number">Số điện thoại:</label>
            <input
              name="employee_phone_number"
              className="w-full border rounded p-2 mb-2"
              type="text"
              readOnly
              value={info?.employee_phone_number || ""}
            />
            <label htmlFor="employee_citizen_identification">CCCD/CMND:</label>
            <input
              name="employee_citizen_identification"
              className="w-full border rounded p-2 mb-2"
              type="text"
              readOnly
              value={info?.employee_citizen_identification || ""}
            />
            <label htmlFor="employee_work_email">Email:</label>
            <input
              name="employee_work_email"
              className="w-full border rounded p-2 mb-2"
              type="text"
              placeholder="example@vikmail.com"
              readOnly
              value={info?.employee_work_email || ""}
            />
            <label htmlFor="employee_work_password">Mật khẩu:</label>
            <input
              name="employee_work_password"
              className="w-full border rounded p-2 mb-2"
              type="text"
              readOnly
              value="******"
            />
            <label htmlFor="employee_license_plates">Biển số xe:</label>
            <input
              name="employee_license_plates"
              className="w-full border rounded p-2 mb-2"
              type="text"
              readOnly
              value={info?.employee_license_plate || ""}
            />
          </div>
        </div>
        <button
          onClick={() => history.back()}
          className="bg-red-400 p-2 rounded cursor-pointer hover:bg-red-600 hover:text-white"
        >
          Return
        </button>
      </div>
    </div>
  );
}
