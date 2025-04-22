"use client";

import { Avatar, Button, DatePicker, Input, notification } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import { UserOutlined } from "@ant-design/icons";

export default function AccountSetting() {
  const router = useRouter();
  const [info, setInfo] = useState({
    id: 0,
    employee_name: "",
    employee_code: "",
    employee_work_email: "",
    employee_private_email: "",
    employee_phone_number: "",
    employee_birthday: "",
    employee_bank_account: "",
    employee_citizen_identification: "",
    employee_license_plate: "",
  });
  const [originalInfo, setOriginalInfo] = useState<typeof info>();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (msg: string) => {
    api.info({
      message: msg,
      placement: "topRight",
      duration: 2,
      style: {
        width: 400,
        borderRadius: 10,
      },
    });
  };

  useEffect(() => {
    async function fetchInfo() {
      try {
        const userId = sessionStorage.getItem("userId");
        if (!userId) {
          router.replace("/Auth");
          return;
        }
        const res = await axios.get("/api/AccountSetting");

        const data = res.data.filter((item: { id: number }) => item.id === Number(userId));

        setInfo(data[0]);
        setOriginalInfo(data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchInfo();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: dayjs.Dayjs) => {
    setInfo((prev) => ({
      ...prev,
      employee_birthday: date ? date.format("YYYY-MM-DD") : "",
    }));
  };

  const handleNumberTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const onlyNumbers = value.replace(/[^0-9]/g, "");
    setInfo((prev) => ({
      ...prev,
      [name]: onlyNumbers,
    }));
  };

  const handleUpdate = async () => {
    try {
      const userId = sessionStorage.getItem("userId");
      if (!userId) {
        return router.replace("/Auth");
      }

      const res = await axios.put("/api/AccountSetting/", { ...info, userId });
      openNotification(res.data.message);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("isLogin");
    sessionStorage.removeItem("userName");
    router.replace("/Auth");
  };

  const isInfoChanged = JSON.stringify(info) !== JSON.stringify(originalInfo);

  return (
    <>
      {contextHolder}
      <div className="p-5">
        <div className="h-[90vh] rounded bg-white text-center py-5">
          <Avatar size={150} icon={<UserOutlined />} className="mt-5" />
          <div className="justify-center flex flex-cols-2 p-5 text-left gap-15">
            <div className="w-[25%] flex flex-col gap-y-2">
              <label htmlFor="employee_id">Mã nhân viên:</label>
              <Input name="employee_id" value={info?.employee_code || ""} readOnly />
              <label htmlFor="employee_name">Họ và tên:</label>
              <Input name="employee_name" value={info?.employee_name || ""} onChange={handleChange} />
              <label htmlFor="employee_birthday">Ngày sinh:</label>
              <DatePicker
                name="employee_birthday"
                format="YYYY-MM-DD"
                placeholder="Chọn ngày sinh"
                value={info?.employee_birthday ? dayjs(info.employee_birthday) : null}
                onChange={handleDateChange}
                className="w-full"
              />
              <label htmlFor="employee_bank_account">Số tài khoản TCB:</label>
              <Input name="employee_bank_account" value={info?.employee_bank_account || ""} onChange={handleNumberTypeChange} />
              <label htmlFor="employee_private_email">Email cá nhân:</label>
              <Input name="employee_private_email" value={info?.employee_private_email || ""} onChange={handleChange} />
            </div>
            <div className="w-[25%] flex flex-col gap-y-2">
              <label htmlFor="employee_phone_number">Số điện thoại:</label>
              <Input name="employee_phone_number" value={info?.employee_phone_number || ""} onChange={handleNumberTypeChange} />
              <label htmlFor="employee_citizen_identification">CCCD/CMND:</label>
              <Input
                name="employee_citizen_identification"
                value={info?.employee_citizen_identification || ""}
                onChange={handleNumberTypeChange}
              />
              <label htmlFor="employee_work_email">Email:</label>
              <Input name="employee_work_email" value={info?.employee_work_email || ""} onChange={handleChange} />
              <label htmlFor="employee_license_plate">Biển số xe:</label>
              <Input name="employee_license_plate" value={info?.employee_license_plate || ""} onChange={handleChange} />
            </div>
          </div>

          <div className="flex gap-x-3 justify-center w-full">
            <Button onClick={handleUpdate} type="primary" disabled={!isInfoChanged}>
              Cập nhật
            </Button>
            <Button onClick={handleLogout} color="danger" variant="solid">
              Đăng xuất
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
