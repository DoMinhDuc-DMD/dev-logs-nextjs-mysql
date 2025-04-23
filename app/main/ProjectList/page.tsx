"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import ProjectListComponent from "../../components/ProjectList/ProjectListComponent";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import { UserRole } from "@/app/constant/roleAuth";

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

  useAuthGuard([UserRole.Leader, UserRole.Developer]);

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
      console.error(error);
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
      <div className="w-full h-[90vh] p-5 rounded bg-white">
        <h1 className="text-xl pb-5 text-center font-bold">Danh sách dự án</h1>
        <div className="h-[93%] border rounded overflow-y-auto">
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
