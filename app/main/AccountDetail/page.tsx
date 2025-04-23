"use client";

import { Avatar, Button } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import "@ant-design/v5-patch-for-react-19";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import { UserOutlined } from "@ant-design/icons";
import AccountDetailInput from "@/app/components/AccountDetail/AccountDetailInput";
import { UserRole } from "@/app/constant/roleAuth";

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

  useAuthGuard([UserRole.Admin, UserRole.HR]);

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
            <AccountDetailInput label="Mã nhân viên" value={info.employee_code} />
            <AccountDetailInput label="Chức vụ/Vị trí" value={info.role} />
            <AccountDetailInput label="Họ và tên" value={info.employee_name} />
            <AccountDetailInput label="Ngày sinh" value={info.employee_birthday} />
            <AccountDetailInput label="Số tài khoản TCB" value={info.employee_bank_account} />
            <AccountDetailInput label="Email cá nhân" value={info.employee_private_email} />
          </div>
          <div className="w-[25%] flex flex-col gap-y-2">
            <AccountDetailInput label="Số điện thoại" value={info.employee_phone_number} />
            <AccountDetailInput label="CCCD/CMND" value={info.employee_citizen_identification} />
            <AccountDetailInput label="Email công ty" value={info.employee_work_email} />
            <AccountDetailInput label="Mật khẩu" value={info.employee_work_password} />
            <AccountDetailInput label="Biển số xe" value={info.employee_license_plate} />
          </div>
        </div>
        <Button onClick={() => history.back()} variant="solid" color="danger">
          Quay lại
        </Button>
      </div>
    </div>
  );
}
