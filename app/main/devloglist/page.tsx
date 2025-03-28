"use client";

import { Button, Table } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "@ant-design/v5-patch-for-react-19";

export default function DevlogList() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const date = dayjs(new Date()).format("DD-MM-YYYY");

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }
    if (userRole !== "Leader") {
      router.replace("/main/notyourright");
    }

    const fetchData = async () => {
      try {
        const res = await axios.get("/apis/devloglist");
        const filteredDevlogs = res.data.devlogs.filter((item: any) => dayjs(item.date).format("DD-MM-YYYY") === date);
        console.log(filteredDevlogs);

        const filteredLeaderEnrolledProjects = res.data.leaderEnrolledProjects.filter(
          (item: any) => (item.account_id = Number(userId))
        );

        console.log(filteredLeaderEnrolledProjects);

        setData(filteredDevlogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: "5%",
      align: "center" as const,
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "Email",
      dataIndex: "employee_work_email",
      key: "employee_work_email",
      width: "10%",
      align: "center" as const,
    },
    {
      title: "Tên dự án",
      dataIndex: "project_name",
      key: "project_name",
      width: "20%",
      align: "center" as const,
    },
    {
      title: "Tên tác vụ",
      dataIndex: "task_name",
      key: "task_name",
      width: "20%",
      align: "center" as const,
    },
    {
      title: "Số giờ",
      dataIndex: "hours",
      key: "hours",
      width: "6%",
      align: "center" as const,
    },
    {
      title: "OT",
      dataIndex: "overtime",
      key: "overtime",
      width: "4%",
      align: "center" as const,
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
      width: "25%",
      align: "center" as const,
    },
    {
      title: "Hành động",
      width: "10%",
      align: "center" as const,
      render: (_: any, record: any) => (
        <div className="flex gap-x-2 justify-center">
          <Button type="primary">Notice</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-5">
      <div className="w-full rounded p-5 bg-white">
        <Table rowKey="id" columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
      </div>
    </div>
  );
}
