"use client";

import { Avatar, Button, Input } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "@ant-design/v5-patch-for-react-19";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import { UserOutlined } from "@ant-design/icons";

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

  useAuthGuard(["Admin", "HR"]);

  useEffect(() => {
    const userId = new URLSearchParams(window.location.search).get("id");

    async function fetchInfo() {
      try {
        const res = await axios.get(`/api/AccountDetail?id=${userId}`);

        setInfo(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchInfo();
  }, [router]);

  return (
    <div className="p-5">
      <div className="h-[90vh] rounded bg-white text-center py-5">
        <Avatar size={150} icon={<UserOutlined />} className="mt-5" />
        <div className="justify-center flex flex-cols-2 p-5 text-left gap-15">
          <div className="w-[25%] flex flex-col gap-y-2">
            <label htmlFor="employee_id">Mã nhân viên:</label>
            <Input name="employee_id" value={info?.employee_code || ""} readOnly />
            <label htmlFor="role">Chức vụ/Vị trí:</label>
            <Input name="role" value={info?.role || ""} readOnly />
            <label htmlFor="employee_name">Họ và tên:</label>
            <Input name="employee_name" value={info?.employee_name || ""} readOnly />
            <label htmlFor="employee_birthday">Ngày sinh:</label>
            <Input
              name="employee_birthday"
              value={info?.employee_birthday ? dayjs(info?.employee_birthday).format("DD/MM/YYYY") : ""}
              readOnly
            />
            <label htmlFor="employee_bank_account">Số tài khoản TCB:</label>
            <Input name="employee_bank_account" value={info?.employee_bank_account || ""} readOnly />
            <label htmlFor="employee_private_email">Email cá nhân:</label>
            <Input name="employee_private_email" value={info?.employee_private_email || ""} readOnly />
          </div>
          <div className="w-[25%] flex flex-col gap-y-2">
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
          Quay lại
        </Button>
      </div>
    </div>
  );
}
