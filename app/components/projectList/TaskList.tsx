"use client";

import { Task } from "@/app/main/projectList/page";
import { Button, Input, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

interface TaskList {
  projectId: number;
  tasks: Task[];
  newTasks: Task[];
  defaultTasks: Task[];
  memberRole: string;
  handleCloseModal: (projectId: number) => void;
}

export default function TaskList({ projectId, tasks, newTasks, defaultTasks, memberRole, handleCloseModal }: TaskList) {
  const [task, setTask] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task[]>([]);
  const [defaultTask, setDefaultTask] = useState<Task[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    setTask(tasks);
    setNewTask(newTasks);
    setDefaultTask(defaultTasks);
  }, [tasks, newTasks, defaultTasks]);

  const handleTaskChange = (taskId: number, newTaskName: string) => {
    setTask((prev) => prev.map((task) => (task.id === taskId ? { ...task, task_name: newTaskName } : task)));
    setNewTask((prev) => prev.map((task) => (task.id === taskId ? { ...task, task_name: newTaskName } : task)));
  };

  const handleAddTask = () => {
    const projectTask = task.filter((t) => t.project_id === projectId);
    const projectNewTask = newTask.filter((t) => t.project_id === projectId);

    const lastTaskId = [...task, ...newTask].reduce((max, t) => (t.id > max ? t.id : max), 0);
    const lastTaskIndex = [...projectTask, ...projectNewTask].reduce((max, t) => (t.task_name_index > max ? t.task_name_index : max), 0);

    setNewTask((prev) => [
      ...prev,
      {
        id: lastTaskId + 1,
        task_name: "",
        project_id: projectId,
        task_name_index: lastTaskIndex + 1,
      },
    ]);
  };

  const handleRemoveTask = () => {
    setNewTask((prev) => {
      const projectNewTask = prev.filter((t) => t.project_id === projectId);

      if (projectNewTask.length > 0) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  };

  const handleUpdateTask = async () => {
    const updatedTasks = task.filter((t) => t.project_id === projectId);
    const newProjectTasks = newTask.filter((t) => t.project_id === projectId);

    const hasEmptyTask = [...updatedTasks, ...newProjectTasks].some((t) => t.task_name.trim() == "");
    if (hasEmptyTask) {
      messageApi.info("Tên task không được để trống");
      return;
    }

    try {
      await axios.post("/api/projectList", { action: "updateTasks", updatedTasks, newProjectTasks });
      messageApi.info("Cập nhật thành công");

      setNewTask([]);
      handleCloseModal(projectId);
    } catch (error) {
      console.error("Lỗi cập nhật dự án:", error);
      messageApi.info("Đã xảy ra lỗi khi cập nhật dự án. Vui lòng kiểm tra lại.");
    }
  };

  const disabledUpdate =
    !task.some((t, index) => t.task_name.trim() !== defaultTask[index].task_name.trim()) && newTask.every((t) => t.task_name.trim() === "");

  const projectTask = task.filter((task: Task) => task.project_id === projectId);
  const newProjectTask = newTask.filter((task: Task) => task.project_id === projectId);

  return (
    <>
      {contextHolder}
      <div className="flex w-full justify-between pt-3">
        <div className="flex flex-col gap-y-3 w-[60%]">
          {projectTask.map((task: Task) => (
            <Input
              key={task.id}
              value={task.task_name}
              onChange={(e) => handleTaskChange(task.id, e.target.value)}
              readOnly={memberRole !== "Leader"}
            />
          ))}
          {newProjectTask.map((task: Task) => (
            <Input key={task.id} value={task.task_name} onChange={(e) => handleTaskChange(task.id, e.target.value)} />
          ))}
        </div>
        <div className="flex flex-col gap-y-3">
          <Button
            type="primary"
            onClick={() => handleAddTask()}
            disabled={projectTask.length === 6 || projectTask.length + newProjectTask.length === 6}
          >
            Thêm task mới
          </Button>
          <Button type="primary" onClick={() => handleRemoveTask()} disabled={newProjectTask.length === 0 || projectTask.length === 6}>
            Giảm task mới
          </Button>
          <Button type="primary" onClick={() => handleUpdateTask()} disabled={disabledUpdate}>
            Cập nhật
          </Button>
        </div>
      </div>
    </>
  );
}
