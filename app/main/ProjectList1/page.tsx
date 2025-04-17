"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import ProjectListComponent from "../../components/ProjectList/ProjectList";
import UseAuthGuard from "@/app/hooks/UseAuthGuard";

export interface ProjectList {
  id: number;
  project_name: string;
  start_date: string;
  end_date: string;
  description: string;
  status: boolean;
}

export interface Task {
  id: number;
  task_name_index: number;
  project_id: number;
  task_name: string;
}

export interface Member {
  account_id: number;
  project_id: number;
  employee_name: string;
  employee_work_email: string;
  devlog_date: string;
}

export default function ProjectList() {
  const router = useRouter();
  const [project, setProject] = useState<ProjectList[]>([]);
  const [task, setTask] = useState<Task[]>([]);
  const [defaultTask, setDefaultTask] = useState<Task[]>([]);
  const [member, setMember] = useState<Member[]>([]);
  const [memberRole, setMemberRole] = useState("");
  const [userId, setUserId] = useState("");

  UseAuthGuard(["Leader", "Developer"]);

  const fetchData = useCallback(async (currentUserId: string) => {
    try {
      const res = await axios.get("/api/ProjectList");
      const data = res.data;

      const filteredProject = data.projects.filter((project: ProjectList) =>
        data.members.some((member: Member) => member.account_id === Number(currentUserId) && member.project_id === project.id)
      );

      setProject(filteredProject);
      setTask(data.tasks ?? []);
      setDefaultTask(data.tasks ?? []);
      setMember(data.members ?? []);
    } catch (error) {
      console.log("Lỗi khi lấy dữ liệu: ", error);
    }
  }, []);

  useEffect(() => {
    const role = sessionStorage.getItem("userRole") || "";
    const id = sessionStorage.getItem("userId") || "";

    setMemberRole(role);
    setUserId(id);
    fetchData(id);
  }, [router, fetchData]);

  return (
    <div className="p-5">
      <div className="w-full h-[85vh] p-5 rounded bg-white">
        <div className="text-center mb-3">Danh sách các dự án</div>
        <div className="h-[95%] border rounded overflow-y-auto">
          <ProjectListComponent
            projects={project}
            tasks={task}
            defaultTasks={defaultTask}
            members={member}
            memberRole={memberRole}
            userId={userId}
            fetchData={() => fetchData(userId)}
          />
        </div>
      </div>
    </div>
  );
}
