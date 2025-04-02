"use client";

import { Button, DatePicker, Input, message } from "antd";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import { Dev } from "@/app/main/projectAdd/page";

interface ProjectAdd {
  devs: Dev[];
  projects: {
    project_name: string;
    start_date: null;
    end_date: null;
    description: string;
    members: Number[];
  };
}

export default function ProjectAdd({ devs, projects }: ProjectAdd) {
  const [project, setProject] = useState({
    project_name: "",
    start_date: null,
    end_date: null,
    description: "",
    members: [] as Number[],
  });
  const [tasks, setTasks] = useState<{ task_name: string; task_name_index: number }[]>([{ task_name: "", task_name_index: 0 }]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    setProject(projects);
  }, [projects]);

  const handleAddProject = async () => {
    try {
      await axios.post("/apis/projectadd", {
        ...project,
        tasks: tasks.filter((t) => t.task_name.trim() !== ""),
      });

      messageApi.info("Thêm dự án thành công!");
      window.location.reload();
    } catch (error) {
      console.error("Lỗi thêm dự án:", error);
      messageApi.info("Đã xảy ra lỗi khi thêm dự án. Vui lòng kiểm tra lại.");
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

  const handleSelectChange = (selectedDev: any) => {
    const selectedMembers = selectedDev.map((option: any) => option.value);
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
    project.members.length === 1;

  return (
    <>
      {contextHolder}
      <div className="p-5">
        <div className="w-full text-center rounded-lg bg-white p-5">
          <h1 className="text-2xl font-bold">Thêm dự án</h1>
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
          <div className="grid grid-cols-2 text-left gap-x-10">
            <div>
              <div className="flex items-center justify-between py-1">
                <label htmlFor="project_name">Tên dự án:</label>
                <Input name="project_name" style={{ width: "70%", padding: "8px" }} onChange={handleChange} />
              </div>
              {tasks.map((t, index) => (
                <div key={index} className="flex items-center justify-between my-2">
                  <label htmlFor={`task_name_${index}`}>Tên task {index + 1}:</label>
                  <Input
                    name={`task_name_${index}`}
                    style={{ width: "70%", padding: "8px" }}
                    value={t.task_name}
                    onChange={(e) => handleTasksChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="select_dev">Thành viên tham gia:</label>
                {devs.length > 0 && (
                  <Select
                    className="w-[60%] p-1"
                    isMulti
                    name="select_dev"
                    options={devs.map((devs) => ({ value: devs.id, label: devs.employee_name }))}
                    onChange={handleSelectChange}
                  />
                )}
              </div>
              <div className="flex items-center justify-between my-2">
                <label htmlFor="start_date">Thời gian bắt đầu:</label>
                <DatePicker style={{ width: "50%", padding: "8px" }} onChange={(date) => handleDateChange("start_date", date)} />
              </div>
              <div className="flex items-center justify-between my-2">
                <label htmlFor="end_date">Thời gian kết thúc (dự kiến):</label>
                <DatePicker style={{ width: "50%", padding: "8px" }} onChange={(date) => handleDateChange("end_date", date)} />
              </div>
              <label htmlFor="description">Mô tả dự án:</label>
              <TextArea rows={8} name="description" placeholder="Nhập mô tả dự án..." onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
