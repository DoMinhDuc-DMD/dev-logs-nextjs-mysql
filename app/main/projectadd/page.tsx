"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import ProjectAdd from "@/components/projectadd/ProjectAdd";

export interface Dev {
  id: number;
  employee_name: string;
}

export default function AddProject() {
  const router = useRouter();
  const [dev, setDev] = useState<Dev[]>([]);
  const [project, setProject] = useState({
    project_name: "",
    start_date: null,
    end_date: null,
    description: "",
    members: [] as Number[],
  });

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

    setProject((prev) => ({ ...prev, members: [Number(userId)] }));

    async function fetchData() {
      try {
        const res = await axios.get<Dev[]>("/apis/projectadd");
        setDev(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setDev([]);
      }
    }
    fetchData();
  }, []);

  return <ProjectAdd devs={dev} projects={project} />;
}
