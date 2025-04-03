"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import ProjectListComponent from "../../../components/projectList/ProjectList";

export interface Task {
  id: number;
  task_name_index: number;
  project_id: number;
  task_name: string;
}

export default function ProjectList() {
  const router = useRouter();
  const [project, setProject] = useState<any[]>([]);
  const [task, setTask] = useState<Task[]>([]);
  const [defaultTask, setDefaultTask] = useState<Task[]>([]);
  const [member, setMember] = useState<any[]>([]);
  const [memberRole, setMemberRole] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole") || "";
    const userId = sessionStorage.getItem("userId") || "";
    const loggedIn = sessionStorage.getItem("isLogin") || "";

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }
    if (userRole !== "Leader" && userRole !== "Developer") {
      router.replace("/main/notYourRight");
      return;
    }
    setMemberRole(userRole);
    setUserId(userId);

    async function fetchData() {
      const res = await axios.get("/api/projectList");
      const data = res.data ?? {};

      const filteredProject = data.projects.filter((project: any) =>
        data.members.some((member: any) => member.account_id === Number(userId) && member.project_id === project.id)
      );

      setProject(filteredProject);
      setTask(data.tasks ?? []);
      setDefaultTask(data.tasks ?? []);

      setMember(data.members ?? []);
    }
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <div className="w-full h-[85vh] p-5 rounded bg-white ">
        <div className="text-center mb-3">Danh sách các dự án</div>
        <div className="h-[95%] border rounded overflow-y-auto">
          <ProjectListComponent projects={project} tasks={task} defaultTasks={defaultTask} members={member} memberRole={memberRole} userId={userId} />
        </div>
      </div>
    </div>
  );
}
