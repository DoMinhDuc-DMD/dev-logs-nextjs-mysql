"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Select from "react-select";

export default function AddProject() {
  const router = useRouter();
  const [tasks, setTasks] = useState<string[]>([""]);

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
  });

  const handleAddTask = () => {
    if (tasks.length < 4) {
      setTasks([...tasks, ""]);
    }
  };

  const handleRemoveTask = () => {
    if (tasks.length > 1 && tasks.length <= 4) {
      setTasks(tasks.slice(0, -1));
    }
  };

  const handleAddProject = () => {
    alert("Project added");
  };

  const options = [
    { value: "dev_1", label: "Dev 1" },
    { value: "dev_2", label: "Dev 2" },
    { value: "dev_3", label: "Dev 3" },
    { value: "dev_4", label: "Dev 4" },
  ];

  return (
    <div className="p-5">
      <div className="w-full text-center">
        <div className="grid grid-cols-2 text-left gap-x-2 rounded-lg bg-white p-5">
          <div>
            <label htmlFor="project-name">Tên dự án:</label>
            <input
              className="w-full my-2 p-1 border rounded-lg"
              name="project-name"
              type="text"
            />

            {tasks.map((_, index) => (
              <div key={index}>
                <label htmlFor={`task-name-${index}`}>Tên công việc:</label>
                <input
                  className="w-full my-2 p-1 border rounded-lg"
                  name={`task-name-${index}`}
                  type="text"
                />
              </div>
            ))}

            {tasks.length < 4 && (
              <button
                onClick={handleAddTask}
                className="bg-blue-400 p-2 mt-3 mr-3 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
              >
                Add new task
              </button>
            )}
            {tasks.length > 1 && tasks.length <= 4 && (
              <button
                onClick={handleRemoveTask}
                className="bg-red-400 p-2 mt-3 rounded cursor-pointer hover:bg-red-600 hover:text-white"
              >
                Remove latest task
              </button>
            )}
          </div>

          <div>
            <label htmlFor="select-dev">Thành viên tham gia</label>
            <Select
              className="w-full block p-1"
              isMulti
              name="select-dev"
              options={options}
            />
            <label htmlFor="start-date">Thời gian bắt đầu:</label>
            <input
              className="w-[40%] block my-2 p-1 border rounded-lg"
              name="start-date"
              type="date"
            />
            <label htmlFor="end-date">Thời gian kết thúc (dự kiến):</label>
            <input
              className="w-[40%] block my-2 p-1 border rounded-lg"
              name="end-date"
              type="date"
            />
            <label htmlFor="description">Mô tả dự án:</label>
            <textarea
              className="w-full block my-2 p-1 border rounded-lg resize-none"
              rows={8}
              name="description"
              placeholder="Nhập mô tả"
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
