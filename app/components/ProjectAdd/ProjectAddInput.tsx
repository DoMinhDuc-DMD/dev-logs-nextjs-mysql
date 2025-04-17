"use client";

import { DatePicker, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Dev } from "@/app/main/ProjectAdd/page";
import dayjs from "dayjs";

interface ProjectAddInput {
  devs: Dev[];
  tasks: { task_name: string; task_name_index: number }[];
  disabled: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleDateChange: (name: string, date: dayjs.Dayjs | null) => void;
  handleTasksChange: (index: number, value: string) => void;
  handleSelectChange: (selectedDev: number[]) => void;
}

export default function ProjectAddInput({
  devs,
  tasks,
  disabled,
  handleChange,
  handleDateChange,
  handleTasksChange,
  handleSelectChange,
}: ProjectAddInput) {
  return (
    <>
      <div className="grid grid-cols-2 text-left gap-x-10">
        <div>
          <div className="flex items-center justify-between py-1">
            <label htmlFor="project_name">Tên dự án:</label>
            <Input name="project_name" style={{ width: "70%", padding: "8px" }} onChange={handleChange} disabled={disabled} />
          </div>
          {tasks.map((t, index) => (
            <div key={index} className="flex items-center justify-between my-2">
              <label htmlFor={`task_name_${index}`}>Tên task {index + 1}:</label>
              <Input
                name={`task_name_${index}`}
                style={{ width: "70%", padding: "8px" }}
                value={t.task_name}
                onChange={(e) => handleTasksChange(index, e.target.value)}
                disabled={disabled}
              />
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="select_dev">Thành viên tham gia:</label>
            {devs.length > 0 && (
              <Select
                optionFilterProp="label"
                listHeight={200}
                style={{ width: "50%", height: 40 }}
                placeholder="Select member"
                mode="multiple"
                options={devs.map((devs) => ({ value: devs.id, label: devs.employee_name || devs.employee_work_email }))}
                onChange={handleSelectChange}
                disabled={disabled}
              />
            )}
          </div>
          <div className="flex items-center justify-between my-2">
            <label htmlFor="start_date">Thời gian bắt đầu:</label>
            <DatePicker
              style={{ width: "50%", padding: "8px" }}
              onChange={(date) => handleDateChange("start_date", date)}
              disabled={disabled}
            />
          </div>
          <div className="flex items-center justify-between my-2">
            <label htmlFor="end_date">Thời gian kết thúc (dự kiến):</label>
            <DatePicker
              style={{ width: "50%", padding: "8px" }}
              onChange={(date) => handleDateChange("end_date", date)}
              disabled={disabled}
            />
          </div>
          <label htmlFor="description">Mô tả dự án:</label>
          <TextArea rows={8} name="description" placeholder="Nhập mô tả dự án..." onChange={handleChange} disabled={disabled} />
        </div>
      </div>
    </>
  );
}
