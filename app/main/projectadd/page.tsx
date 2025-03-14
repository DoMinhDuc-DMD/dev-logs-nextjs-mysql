"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Select from "react-select";

interface Dev {
  id: number;
  employee_name: string;
}

export default function AddProject() {
  const router = useRouter();
  const [dev, setDev] = useState<Dev[]>([]);
  const [project, setProject] = useState({
    project_name: "",
    start_date: "",
    end_date: "",
    description: "",
    members: [],
  });
  const [tasks, setTasks] = useState<string[]>([""]);

  const isMin = tasks.length === 1;
  const isMax = tasks.length === 6;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userRole = sessionStorage.getItem("userRole");
      const loggedIn = sessionStorage.getItem("isLogin");

      if (loggedIn && userRole !== "Leader") {
        router.replace("/main/notyourright");
      } else if (!loggedIn) {
        router.replace("/auth");
      }
    }

    async function fetchData() {
      const res = await fetch("/main/projectadd/api", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Không thể lấy danh sách tài khoản");
      }

      const data: Dev[] = await res.json();
      setDev(Array.isArray(data) ? data : []);
    }
    fetchData();
  }, []);

  const handleAddProject = async () => {
    try {
      const res = await fetch("/main/projectadd/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...project,
          tasks: tasks.filter((t) => t.trim() !== ""),
        }),
      });
      if (!res.ok) throw new Error("Không thể thêm dự án");

      alert("Thêm dự án thành công");
      window.location.reload();
    } catch (error) {
      console.log("Lỗi thêm dự án: ", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTasksChange = (index: number, value: string) => {
    const newTasks = [...tasks];
    newTasks[index] = value;
    setTasks(newTasks);
  };

  const handleSelectChange = (selectedDev: any) => {
    const selectedMembers = selectedDev.map((option: any) => option.value);
    setProject((prev) => ({ ...prev, members: selectedMembers }));
  };

  const handleAddTasks = () => {
    if (tasks.length < 6) {
      setTasks([...tasks, ""]);
    }
  };

  const handleRemoveTasks = () => {
    if (tasks.length > 1 && tasks.length <= 6) {
      setTasks(tasks.slice(0, -1));
    }
  };

  return (
    <div className="p-5">
      <div className="w-full text-center rounded-lg bg-white p-5">
        <h1 className="text-2xl font-bold">Thêm dự án</h1>
        <div className="flex justify-between items-center my-3">
          <div>
            <button
              onClick={handleAddTasks}
              disabled={isMax}
              className={`bg-blue-400 p-2 mr-3 rounded ${
                isMax
                  ? "cursor-no-drop hover:bg-blue-600"
                  : "cursor-pointer hover:bg-blue-600 hover:text-white"
              }`}
            >
              Add new tasks
            </button>
            <button
              onClick={handleRemoveTasks}
              disabled={isMin}
              className={`bg-red-400 p-2 rounded ${
                isMin
                  ? "cursor-no-drop hover:bg-red-600"
                  : "cursor-pointer hover:bg-red-600 hover:text-white"
              }`}
            >
              Remove latest tasks
            </button>
          </div>
          <button
            onClick={handleAddProject}
            className="bg-blue-400 p-2 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            Add project
          </button>
        </div>
        <div className="grid grid-cols-2 text-left gap-x-10">
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="project_name">Tên dự án:</label>
              <input
                className="w-[70%] my-2 p-1 border rounded-lg"
                name="project_name"
                type="text"
                onChange={handleChange}
              />
            </div>

            {tasks.map((t, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between my-2"
              >
                <label htmlFor={`tasks_name_${index}`}>
                  Tên công việc {index + 1}:
                </label>
                <input
                  className="w-[70%] my-2 p-1 border rounded-lg"
                  name={`tasks_name_${index}`}
                  type="text"
                  value={t}
                  onChange={(e) => handleTasksChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="select_dev">Thành viên tham gia:</label>
              <Select
                className="w-[60%] block p-1"
                isMulti
                name="select_dev"
                options={dev?.map((dev) => ({
                  value: dev.id,
                  label: dev.employee_name,
                }))}
                onChange={handleSelectChange}
              />
            </div>
            <div className="flex items-center justify-between my-2">
              <label htmlFor="start_date">Thời gian bắt đầu:</label>
              <input
                className="w-[40%] block my-2 p-1 border rounded-lg"
                name="start_date"
                type="date"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between my-2">
              <label htmlFor="end_date">Thời gian kết thúc (dự kiến):</label>
              <input
                className="w-[40%] block my-2 p-1 border rounded-lg"
                name="end_date"
                type="date"
                onChange={handleChange}
              />
            </div>
            <label htmlFor="description">Mô tả dự án:</label>
            <textarea
              className="w-full block my-2 p-1 border rounded-lg resize-none"
              rows={8}
              name="description"
              placeholder="Nhập mô tả"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
