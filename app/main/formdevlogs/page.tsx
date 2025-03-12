"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Form() {
  const [formData, setFormData] = useState({
    project: "",
    position: "",
    hour: "",
    overtime: false,
    note: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
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
    const res = await fetch("/main/formdevlogs/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, userId }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="p-5 flex gap-x-2">
      <div className="w-full text-center">
        <div className="rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <select className="w-[20%]" name="project" onChange={handleChange}>
              <option value="">Chọn dự án</option>
              <option value="project_1">Project 1</option>
              <option value="project_2">Project 2</option>
              <option value="project_3">Project 3</option>
              <option value="project_4">Project 4</option>
            </select>
            <select className="w-[40%]" name="position" onChange={handleChange}>
              <option value="">Chọn công việc</option>
              <option value="position_1">Job 1</option>
              <option value="position_2">Job 2</option>
              <option value="position_3">Job 3</option>
              <option value="position_4">Job 4</option>
            </select>
            <div className="flex gap-x-6">
              <label htmlFor="hour">Số giờ: </label>
              <input
                id="datetime"
                name="hour"
                type="number"
                placeholder="..."
                onChange={handleChange}
                className="w-[40px] text-center border rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
      <Calendar
        className=" bg-gray-300 rounded-lg p-2"
        onChange={handleDateChange}
        value={formData.date}
      />
    </div>
  );
}
