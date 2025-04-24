"use client";

import { Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Dev } from "@/app/main/ProjectAdd/page";
import dayjs from "dayjs";
import ProjectAddDatePicker from "./ProjectAddDatePicker";

interface ProjectAddInput {
  devs: Dev[];
  project: {
    project_name: string;
    start_date: string;
    end_date: string;
    description: string;
    members: number[];
  };
  tasks: { task_name: string; task_name_index: number }[];
  submitted: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleDateChange: (name: string, date: dayjs.Dayjs | null) => void;
  handleTasksChange: (index: number, value: string) => void;
  handleSelectChange: (selectedDev: number[]) => void;
}

export default function ProjectAddInput({
  devs,
  project,
  tasks,
  submitted,
  handleChange,
  handleDateChange,
  handleTasksChange,
  handleSelectChange,
}: ProjectAddInput) {
  return (
    <>
      <div className="grid grid-cols-2 text-left gap-x-10">
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="project_name">Tên dự án:</label>
            <Input name="project_name" style={{ width: "70%", padding: "8px" }} onChange={handleChange} disabled={submitted} />
          </div>
          {tasks.map((t, index) => (
            <div key={index} className="flex items-center justify-between pt-3">
              <label htmlFor={`task_name_${index}`}>Tên tác vụ {index + 1}:</label>
              <Input
                name={`task_name_${index}`}
                style={{ width: "70%", padding: "8px" }}
                value={t.task_name}
                onChange={(e) => handleTasksChange(index, e.target.value)}
                disabled={submitted}
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
                style={{ width: "60%", height: 40 }}
                placeholder="Chọn thành viên"
                mode="multiple"
                options={devs.map((devs) => ({ value: devs.id, label: devs.employee_name }))}
                onChange={handleSelectChange}
                disabled={submitted}
                maxTagCount={"responsive"}
              />
            )}
          </div>
          <ProjectAddDatePicker name="start_date" project={project} submitted={submitted} handleDateChange={handleDateChange} />
          <ProjectAddDatePicker name="end_date" project={project} submitted={submitted} handleDateChange={handleDateChange} />
          <div className="flex flex-col gap-y-2 pt-3">
            <label htmlFor="description">Mô tả dự án:</label>
            <TextArea rows={8} name="description" placeholder="Nhập mô tả dự án..." onChange={handleChange} disabled={submitted} />
          </div>
        </div>
      </div>
    </>
  );
}
