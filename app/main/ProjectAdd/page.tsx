"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import dayjs from "dayjs";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import { notification } from "antd";
import ProjectAddInput from "../../components/ProjectAdd/ProjectAddInput";
import ProjectAddButton from "@/app/components/ProjectAdd/ProjectAddButton";

export interface Dev {
  id: number;
  employee_name: string;
  employee_work_email: string;
}

export default function AddProject() {
  const router = useRouter();
  const [dev, setDev] = useState<Dev[]>([]);
  const [project, setProject] = useState({ project_name: "", start_date: null, end_date: null, description: "", members: [] as number[] });
  const [tasks, setTasks] = useState<{ task_name: string; task_name_index: number }[]>([{ task_name: "", task_name_index: 0 }]);
  const [api, contextHolder] = notification.useNotification();
  const [disabled, setDisabled] = useState(false);

  const openNotification = (msg: string) =>
    api.info({
      message: msg,
      placement: "topRight",
      duration: 2,
      style: {
        width: 400,
        borderRadius: 10,
      },
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
      }
    }
    fetchData();
  }, [router]);

  const handleAddProject = async () => {
    try {
      const res = await axios.post("/api/ProjectAdd", {
        project,
        tasks: tasks.filter((t) => t.task_name.trim() !== ""),
      });

      openNotification(res.data.message);

      setDisabled(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Lỗi thêm dự án:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (name: string, date: dayjs.Dayjs | null) => {
    setProject((prev) => ({
      ...prev,
      [name]: date ? date.format("YYYY-MM-DD") : "",
    }));
  };

  const handleTasksChange = (index: number, value: string) => {
    const newTasks = [...tasks];
    newTasks[index] = { task_name: value, task_name_index: index + 1 };
    setTasks(newTasks);
  };

  const handleSelectChange = (selectedDev: number[]) => {
    const selectedMembers = selectedDev.map((option) => option);

    setProject((prev) => ({ ...prev, members: [Number(sessionStorage.getItem("userId")), ...selectedMembers] }));
  };

  const handleAddTasks = () => {
    if (tasks.length < 6) {
      setTasks([...tasks, { task_name: "", task_name_index: tasks.length }]);
    }
  };

  const handleRemoveTasks = () => {
    if (tasks.length > 1) {
      setTasks(tasks.slice(0, -1));
    }
  };

  const isDisabled =
    !project.project_name.trim() ||
    tasks.every((t) => t.task_name.trim() === "") ||
    !project.start_date ||
    !project.end_date ||
    project.members.length === 1 ||
    !project.description.trim();

  return (
    <>
      {contextHolder}
      <div className="p-5">
        <div className="w-full text-center rounded-lg bg-white p-5">
          <h1 className="text-2xl font-bold">Thêm dự án</h1>
          <ProjectAddButton
            tasks={tasks}
            disabled={disabled}
            isDisabled={isDisabled}
            handleAddProject={handleAddProject}
            handleAddTask={handleAddTasks}
            handleRemoveTask={handleRemoveTasks}
          />
          <ProjectAddInput
            devs={dev}
            tasks={tasks}
            disabled={disabled}
            handleChange={handleChange}
            handleDateChange={handleDateChange}
            handleSelectChange={handleSelectChange}
            handleTasksChange={handleTasksChange}
          />
        </div>
      </div>
    </>
  );
}
