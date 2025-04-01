"use client";

import { Button, message } from "antd";
import axios from "axios";
import { useState } from "react";

interface ProjectAddButtons {
  projects: {
    project_name: string;
    start_date: null;
    end_date: null;
    description: string;
    members: Number[];
  };
  tasks: { task_name: string; task_name_index: number }[];
}

export default function ProjectAddButtons({ projects, tasks }: ProjectAddButtons) {
  const [task, setTask] = useState<{ task_name: string; task_name_index: number }[]>([{ task_name: "", task_name_index: 0 }]);
  const [messageApi, contextHolder] = message.useMessage();

  const handleAddTasks = () => {
    if (tasks.length < 6) {
      setTask([...tasks, { task_name: "", task_name_index: tasks.length }]);
    }
  };

  const handleRemoveTasks = () => {
    if (tasks.length > 1) {
      setTask(tasks.slice(0, -1));
    }
  };
  const handleAddProject = async () => {
    try {
      await axios.post("/apis/projectadd", {
        ...projects,
        tasks: tasks.filter((t) => t.task_name.trim() !== ""),
      });

      messageApi.info("Thêm dự án thành công!");
      window.location.reload();
    } catch (error) {
      console.error("Lỗi thêm dự án:", error);
      messageApi.info("Đã xảy ra lỗi khi thêm dự án. Vui lòng kiểm tra lại.");
    }
  };
  const isDisabled =
    !projects.project_name.trim() ||
    task.every((t) => t.task_name.trim() === "") ||
    !projects.start_date ||
    !projects.end_date ||
    projects.members.length === 0;
  console.log(task);
  return (
    <>
      {contextHolder}
      <div className="flex justify-between items-center my-3">
        <div className="flex gap-x-3">
          <Button type="primary" onClick={handleAddTasks} disabled={tasks.length === 6}>
            Thêm task
          </Button>
          <Button color="danger" variant="solid" onClick={handleRemoveTasks} disabled={tasks.length === 1}>
            Giảm task
          </Button>
        </div>
        <Button type="primary" onClick={handleAddProject} disabled={isDisabled}>
          Tạo dự án
        </Button>
      </div>
    </>
  );
}
