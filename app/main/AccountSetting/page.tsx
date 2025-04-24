"use client";

import { Avatar, Button, notification } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import { UserOutlined } from "@ant-design/icons";
import AccountSettingInput from "@/app/components/AccountSetting/AccountSettingInput";
import { GET_DATE_FORMAT } from "@/app/constant/dateFormat";
import { UserRole } from "@/app/constant/roleAuth";

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
  const [currentRole, setCurrentRole] = useState<string | null>("");

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
        const userRole = sessionStorage.getItem("userRole");
        setCurrentRole(userRole);

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
      employee_birthday: date ? date.format(GET_DATE_FORMAT) : "",
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
        <div className="h-[90vh] rounded bg-white text-center p-5">
          <Avatar size={150} icon={<UserOutlined />} className="mt-5" />
          <div className="justify-center flex flex-cols-2 p-5 text-left gap-15">
            <div className="w-[25%] flex flex-col gap-y-2">
              <AccountSettingInput label="Mã nhân viên" name="employee_code" valueInput={info.employee_code} readOnly />
              <AccountSettingInput label="Họ và tên" name="employee_name" valueInput={info.employee_name} onChangeInput={handleChange} />
              <AccountSettingInput
                label="Ngày sinh"
                valueDate={info?.employee_birthday ? dayjs(info.employee_birthday) : null}
                name="employee_birthday"
                format={GET_DATE_FORMAT}
                placeholder="Chọn ngày sinh"
                onChangeDate={handleDateChange}
              />
              <AccountSettingInput
                label="Số tài khoản TCB"
                name="employee_bank_account"
                valueInput={info.employee_bank_account}
                onChangeInput={handleNumberTypeChange}
              />
              <AccountSettingInput
                label="Email cá nhân"
                name="employee_private_email"
                valueInput={info.employee_private_email}
                onChangeInput={handleChange}
              />
            </div>
            <div className="w-[25%] flex flex-col gap-y-2">
              <AccountSettingInput
                label="Số điện thoại"
                name="employee_phone_number"
                valueInput={info.employee_phone_number}
                onChangeInput={handleNumberTypeChange}
              />
              <AccountSettingInput
                label="CCCD/CMND"
                name="employee_citizen_identification"
                valueInput={info.employee_citizen_identification}
                onChangeInput={handleNumberTypeChange}
              />
              <AccountSettingInput
                label="Email công ty"
                name="employee_work_email"
                valueInput={info.employee_work_email}
                onChangeInput={handleChange}
                readOnly={currentRole !== UserRole.Admin}
              />
              <AccountSettingInput
                label="Biển số xe"
                name="employee_license_plate"
                valueInput={info.employee_license_plate}
                onChangeInput={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-x-3 justify-center mt-3 w-full">
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
