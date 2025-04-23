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
import { GET_DATE_FORMAT } from "@/app/constant/dateFormat";
import { UserRole } from "@/app/constant/roleAuth";

export interface Dev {
  id: number;
  employee_name: string;
  employee_work_email: string;
}

export default function AddProject() {
  const router = useRouter();
  const [dev, setDev] = useState<Dev[]>([]);
  const [project, setProject] = useState<{
    project_name: string;
    start_date: string;
    end_date: string;
    description: string;
    members: number[];
  }>({ project_name: "", start_date: "", end_date: "", description: "", members: [] as number[] });
  const [tasks, setTasks] = useState<{ task_name: string; task_name_index: number }[]>([{ task_name: "", task_name_index: 0 }]);
  const [api, contextHolder] = notification.useNotification();
  const [submitted, setSubmitted] = useState(false);

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

  useAuthGuard([UserRole.Leader]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");

    setProject((prev) => ({ ...prev, members: [Number(userId)] }));

    async function fetchData() {
      try {
        const res = await axios.get<Dev[]>("/api/ProjectAdd");
        setDev(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error(error);
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

      setSubmitted(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTasksChange = (index: number, value: string) => {
    const newTasks = [...tasks];
    newTasks[index] = { task_name: value, task_name_index: index + 1 };
    setTasks(newTasks);
  };

  const handleNumberTasks = (name: string) => {
    if (name === "addTask" && tasks.length < 6) {
      setTasks([...tasks, { task_name: "", task_name_index: tasks.length }]);
    } else if (name === "removeTask" && tasks.length > 1) {
      setTasks(tasks.slice(0, -1));
    }
  };

  const handleSelectChange = (selectedDev: number[]) => {
    const selectedMembers = selectedDev.map((option) => option);

    setProject((prev) => ({ ...prev, members: [Number(sessionStorage.getItem("userId")), ...selectedMembers] }));
  };

  const handleDateChange = (name: string, date: dayjs.Dayjs | null) => {
    if (name === "start_date") {
      setProject((prev) => ({
        ...prev,
        start_date: date ? date.format(GET_DATE_FORMAT) : "",
        end_date: "",
      }));
    } else {
      setProject((prev) => ({
        ...prev,
        [name]: date ? date.format(GET_DATE_FORMAT) : "",
      }));
    }
  };

  const isDisabled =
    ["project_name", "start_date", "end_date", "description"].some((key) => !project[key]?.trim?.()) ||
    project.members.length === 1 ||
    tasks.every((t) => t.task_name.trim() === "");

  return (
    <>
      {contextHolder}
      <div className="p-5">
        <div className="w-full rounded-lg bg-white p-5">
          <h1 className="text-xl text-center font-bold">Tạo dự án mới</h1>
          <ProjectAddButton
            tasks={tasks}
            submitted={submitted}
            isDisabled={isDisabled}
            handleAddProject={handleAddProject}
            handleNumberTasks={handleNumberTasks}
          />
          <ProjectAddInput
            devs={dev}
            project={project}
            tasks={tasks}
            submitted={submitted}
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
