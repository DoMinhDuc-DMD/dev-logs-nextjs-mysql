"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import { DatePicker } from "antd";

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    hours: "",
    overtime: false,
    note: "",
    date: "",
  });
  const [project, setProject] = useState();
  const [task, setTask] = useState();

  useEffect(() => {
    if (typeof window === "undefined") {
      const userRole = sessionStorage.getItem("userRole");
      const loggedIn = sessionStorage.getItem("isLogin");

      if ((loggedIn && userRole !== "Leader") || userRole !== "Developer") {
        router.replace("/main/notyourright");
      } else if (!loggedIn) {
        router.replace("/auth");
      }
    }

    async function fetchProjectTask() {
      const res = await fetch("/main/devloginput/api");
      const data = await res.json();
      setProject(data.formattedProject);
      setTask(data.formattedTask);
    }

    fetchProjectTask();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (selectedOption: any, actionMeta: any) => {
    const { name } = actionMeta;
    setFormData((prev) => ({
      ...prev,
      [name]: selectedOption.value,
    }));
  };

  const handleDateChange = (value: any) => {
    if (value) {
      const adjustedDate = new Date(
        value.getTime() - value.getTimezoneOffset() * 60000
      );

      setFormData((prev) => ({
        ...prev,
        date: adjustedDate.toISOString().split("T")[0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = sessionStorage.getItem("userId");
    const res = await fetch("/main/devloginput/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, userId }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="p-5 flex gap-x-2">
      <div className="w-full">
        <div className="rounded-lg bg-white p-5">
          <div className="flex justify-between items-center">
            <Select
              className="w-[30%]"
              options={project}
              name="project"
              onChange={handleSelectChange}
            />
            <Select
              className="w-[30%]"
              options={task}
              name="task"
              onChange={handleSelectChange}
            />
            <div className="flex items-center gap-x-6">
              <label htmlFor="hours">Số giờ: </label>
              <input
                id="datetime"
                name="hours"
                type="number"
                placeholder="..."
                onChange={handleChange}
                className="w-[50px] h-[36px] text-center border rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <label htmlFor="overtime">OT</label>
              <input
                name="overtime"
                type="checkbox"
                id="overtime"
                className="ml-2"
                onChange={handleChange}
              />
            </div>
          </div>
          <input
            name="note"
            className="flex w-full mt-5 p-2"
            type="text"
            placeholder="Ghi chú"
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-400 p-2 mt-5 rounded cursor-pointer hover:bg-blue-600 hover:text-white"
        >
          Add devlog
        </button>
      </div>
      {/* <Calendar
        className=" bg-gray-300 rounded-lg p-2"
        onChange={handleDateChange}
        value={formData.date}
      /> */}
      <DatePicker open={true} className="w-[300px]" />
    </div>
  );
}
