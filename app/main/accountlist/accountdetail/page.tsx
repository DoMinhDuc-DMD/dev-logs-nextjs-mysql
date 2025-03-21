"use client";

import { Button, Input } from "antd";
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
    const userRole = sessionStorage.getItem("userRole");
    const loggedIn = sessionStorage.getItem("isLogin");
    const userId = new URLSearchParams(window.location.search).get("id");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }
    if (userRole !== "Admin" && userRole !== "HR") {
      router.replace("/main/notyourright");
    }

    async function fetchInfo() {
      try {
        const res = await fetch(`/main/accountlist/accountdetail/api?id=${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error("Lỗi lấy thông tin tài khoản");

        const data = await res.json();
        if (!data || Object.keys(data).length === 0) throw new Error("Dữ liệu không hợp lệ");

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
            <Input name="employee_id" value={info?.employee_code || ""} readOnly />
            <label htmlFor="role">Chức vụ/Vị trí:</label>
            <Input name="role" value={info?.role || ""} readOnly />
            <label htmlFor="employee_name">Họ và tên:</label>
            <Input name="employee_name" value={info?.employee_name || ""} readOnly />
            <label htmlFor="employee_birthday">Ngày sinh:</label>
            <Input name="employee_birthday" value={info?.employee_birthday} readOnly />
            <label htmlFor="employee_bank_account">Số tài khoản TCB:</label>
            <Input name="employee_bank_account" value={info?.employee_bank_account || ""} readOnly />
            <label htmlFor="employee_private_email">Email cá nhân:</label>
            <Input name="employee_private_email" value={info?.employee_private_email || ""} readOnly />
          </div>
          <div>
            <label htmlFor="employee_phone_number">Số điện thoại:</label>
            <Input name="employee_phone_number" value={info?.employee_phone_number || ""} readOnly />
            <label htmlFor="employee_citizen_identification">CCCD/CMND:</label>
            <Input name="employee_citizen_identification" value={info?.employee_citizen_identification || ""} readOnly />
            <label htmlFor="employee_work_email">Email:</label>
            <Input name="employee_work_email" value={info?.employee_work_email || ""} readOnly />
            <label htmlFor="employee_work_password">Mật khẩu:</label>
            <Input name="employee_work_password" value={info?.employee_work_password || ""} readOnly />
            <label htmlFor="employee_license_plates">Biển số xe:</label>
            <Input name="employee_license_plates" value={info?.employee_license_plate || ""} readOnly />
          </div>
        </div>
        <Button onClick={() => history.back()} variant="solid" color="danger">
          Return
        </Button>
      </div>
    </div>
  );
}
