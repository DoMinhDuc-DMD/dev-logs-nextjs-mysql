"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import ProjectAdd from "../../components/ProjectAdd/ProjectAdd";
import useAuthGuard from "@/app/hooks/useAuthGuard";

export interface Dev {
  id: number;
  employee_name: string;
  employee_work_email: string;
}

export default function AddProject() {
  const router = useRouter();
  const [dev, setDev] = useState<Dev[]>([]);
  const [project, setProject] = useState({
    project_name: "",
    start_date: null,
    end_date: null,
    description: "",
    members: [] as number[],
  });

  useAuthGuard(["Leader"]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");

    setProject((prev) => ({ ...prev, members: [Number(userId)] }));

    async function fetchData() {
      try {
        const res = await axios.get<Dev[]>("/api/ProjectAdd");
        setDev(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setDev([]);
      }
    }
    fetchData();
  }, [router]);

  return <ProjectAdd devs={dev} projects={project} />;
}
