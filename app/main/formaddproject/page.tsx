"use client";

import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import Select from "react-select";

interface Dev {
  id: number;
  employee_name: string;
}

export default function AddProject() {
  const router = useRouter();
  const [dev, setDev] = useState<Dev[]>([]);
  const [taskElement, setTaskElement] = useState<string[]>([""]);
  const [project, setProject] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userRole = sessionStorage.getItem("userRole");
      const loggedIn = sessionStorage.getItem("isLogin");

      if (loggedIn && userRole !== "leader") {
        router.replace("/main");
      } else if (!loggedIn) {
        router.replace("/auth/login");
      }
    }

    async function fetchData() {
      const res = await fetch("/main/formaddproject/api", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Không thể lấy danh sách tài khoản");
      }

      const data: Dev[] = await res.json();
      // console.log(data);
      setDev(Array.isArray(data) ? data : []);
    }
    fetchData();
  }, []);

  const handleAddProject = async () => {
    try {
      await fetch("/main/formaddproject/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ project }),
      });
    } catch (error) {
      console.log("Lỗi thêm dự án: ", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setProject((prev) => ({ ...prev!, [e.target.name]: e.target.value }));
  };
  console.log(project);

  const handleAddTask = () => {
    if (taskElement.length < 4) {
      setTaskElement([...taskElement, ""]);
    }
  };

  const handleRemoveTask = () => {
    if (taskElement.length > 1 && taskElement.length <= 4) {
      setTaskElement(taskElement.slice(0, -1));
    }
  };

  return (
    <div className="p-5">
      <div className="w-full text-center">
        <div className="grid grid-cols-2 text-left gap-x-2 rounded-lg bg-white p-5">
          <div>
            <label htmlFor="project_name">Tên dự án:</label>
            <input
              className="w-full my-2 p-1 border rounded-lg"
              name="project_name"
              type="text"
              onChange={handleChange}
            />

            {taskElement.map((_, index) => (
              <div key={index}>
                <label htmlFor={`task_name_${index}`}>Tên công việc:</label>
                <input
                  className="w-full my-2 p-1 border rounded-lg"
                  name={`task_name_${index}`}
                  type="text"
                  onChange={handleChange}
                />
              </div>
            ))}

            {taskElement.length < 4 && (
              <button
                onClick={handleAddTask}
                className="bg-blue-400 p-2 mt-3 mr-3 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
              >
                Add new task
              </button>
            )}
            {taskElement.length > 1 && taskElement.length <= 4 && (
              <button
                onClick={handleRemoveTask}
                className="bg-red-400 p-2 mt-3 rounded cursor-pointer hover:bg-red-600 hover:text-white"
              >
                Remove latest task
              </button>
            )}
          </div>

          <div>
            <label htmlFor="select_dev">Thành viên tham gia</label>
            <Select
              className="w-full block p-1"
              isMulti
              name="select_dev"
              options={dev?.map((dev) => ({
                value: dev.id,
                label: dev.employee_name,
              }))}
            />
            <label htmlFor="start_date">Thời gian bắt đầu:</label>
            <input
              className="w-[40%] block my-2 p-1 border rounded-lg"
              name="start_date"
              type="date"
              onChange={handleChange}
            />
            <label htmlFor="end_date">Thời gian kết thúc (dự kiến):</label>
            <input
              className="w-[40%] block my-2 p-1 border rounded-lg"
              name="end_date"
              type="date"
              onChange={handleChange}
            />
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

        <button
          onClick={handleAddProject}
          className="bg-blue-400 p-2 mt-5 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          Add project
        </button>
      </div>
    </div>
  );
}
