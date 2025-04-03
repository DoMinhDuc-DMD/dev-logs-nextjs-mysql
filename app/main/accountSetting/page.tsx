"use client";

import { Button, DatePicker, Input, message } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";

export default function AccountSetting() {
  const router = useRouter();
  const [info, setInfo] = useState({
    employee_name: "",
    employee_code: "",
    employee_work_email: "",
    employee_work_password: "",
    employee_private_email: "",
    employee_phone_number: "",
    employee_birthday: "",
    employee_bank_account: "",
    employee_citizen_identification: "",
    employee_license_plate: "",
    role: "",
  });
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    async function fetchInfo() {
      try {
        const userId = sessionStorage.getItem("userId");
        if (!userId) {
          router.replace("/auth");
          return;
        }
        const res = await axios.get("/api/accountSetting");
        const data = res.data.filter((item: any) => item.id === Number(userId));

        setInfo(data[0]);
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

  const handleDateChange = (date: any) => {
    setInfo((prev) => ({
      ...prev,
      employee_birthday: date ? dayjs(date).format("YYYY-MM-DD") : "",
    }));
  };

  const handleUpdate = async () => {
    try {
      const userId = sessionStorage.getItem("userId");
      if (!userId) {
        router.replace("/auth");
        return;
      }

      await axios.put("/api/accountSetting/", { ...info, userId });
      messageApi.info("Cập nhật thông tin tài khoản thành công!");
    } catch (error) {
      console.log("Lỗi cập nhật thông tin tài khoản: ", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("isLogin");
    sessionStorage.removeItem("userName");
    router.replace("/auth");
  };

  return (
    <>
      {contextHolder}
      <div className="p-5">
        <div className="rounded bg-white text-center py-5">
          <p>Account Setting</p>
          <div className="w-[60%] mx-auto grid grid-cols-2 p-5 text-left gap-10">
            <div>
              <label htmlFor="employee_id">Mã nhân viên:</label>
              <Input name="employee_id" value={info?.employee_code || ""} readOnly />
              <label htmlFor="role">Chức vụ/Vị trí:</label>
              <Input name="role" value={info.role || ""} readOnly />
              <label htmlFor="employee_name">Họ và tên:</label>
              <Input name="employee_name" value={info?.employee_name || ""} onChange={handleChange} />
              <label htmlFor="employee_birthday">Ngày sinh:</label>
              <DatePicker
                name="employee_birthday"
                format="YYYY-MM-DD"
                value={info?.employee_birthday ? dayjs(info.employee_birthday) : null}
                onChange={handleDateChange}
                className="w-full"
              />
              <label htmlFor="employee_bank_account">Số tài khoản TCB:</label>
              <Input name="employee_bank_account" value={info?.employee_bank_account || ""} onChange={handleChange} />
              <label htmlFor="employee_private_email">Email cá nhân:</label>
              <Input name="employee_private_email" value={info?.employee_private_email || ""} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="employee_phone_number">Số điện thoại:</label>
              <Input name="employee_phone_number" value={info?.employee_phone_number || ""} onChange={handleChange} />
              <label htmlFor="employee_citizen_identification">CCCD/CMND:</label>
              <Input name="employee_citizen_identification" value={info?.employee_citizen_identification || ""} onChange={handleChange} />
              <label htmlFor="employee_work_email">Email:</label>
              <Input name="employee_work_email" value={info?.employee_work_email || ""} onChange={handleChange} />
              <label htmlFor="employee_work_password">Mật khẩu:</label>
              <Input name="employee_work_password" value={info?.employee_work_password || ""} onChange={handleChange} />
              <label htmlFor="employee_license_plate">Biển số xe:</label>
              <Input name="employee_license_plate" value={info?.employee_license_plate || ""} onChange={handleChange} />
            </div>
          </div>
          <div className="flex gap-x-3 justify-center w-full">
            <Button onClick={handleUpdate} type="primary">
              Update
            </Button>
            <Button onClick={handleLogout} color="danger" variant="solid">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
