"use client";

import { DatePicker } from "antd";
import dayjs from "dayjs";

interface ProjectAddDatePickerProps {
  name: "start_date" | "end_date";
  project: { start_date: string; end_date: string };
  submitted: boolean;
  handleDateChange: (name: string, date: dayjs.Dayjs | null) => void;
}

export default function ProjectAddDatePicker({ name, project, submitted, handleDateChange }: ProjectAddDatePickerProps) {
  return (
    <div className="flex items-center justify-between pt-3">
      <label htmlFor={name}>{name === "start_date" ? "Ngày bắt đầu:" : "Ngày kết thúc:"}</label>
      <DatePicker
        style={{ width: "50%", padding: "8px" }}
        placeholder={name === "start_date" ? "Chọn ngày bắt đầu:" : "Chọn ngày kết thúc:"}
        value={project[name] ? dayjs(project[name]) : null}
        onChange={(date) => handleDateChange(name, date)}
        disabled={name === "end_date" ? !project.start_date || submitted : submitted}
        disabledDate={(current) => {
          const today = dayjs().startOf("day");

          if (name === "start_date") {
            return current && current < today;
          }

          if (name === "end_date" && project.start_date) {
            const start = dayjs(project.start_date).add(7, "day").startOf("day");
            return current && current < start;
          }

          return true;
        }}
      />
    </div>
  );
}
