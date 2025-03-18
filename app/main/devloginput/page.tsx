"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Select from "react-select";
import { DatePicker, Button, Checkbox, CheckboxChangeEvent, InputNumber } from "antd";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import "@ant-design/v5-patch-for-react-19";
import session from "express-session";

export default function Form() {
  const router = useRouter();

  const [project, setProject] = useState([]);
  const [task, setTask] = useState([]);
  const [filteredTask, setFilteredTask] = useState([]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    hours: 1,
    overtime: false,
    note: "",
    date: "",
    project: null,
    task: null,
  });
  const isButtonDisabled = !formData.date || !formData.hours || !formData.project || !formData.task;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userRole = sessionStorage.getItem("userRole");
      const loggedIn = sessionStorage.getItem("isLogin");
      if (!loggedIn) {
        router.replace("/auth");
      } else if (userRole !== "Leader" && userRole !== "Developer") {
        router.replace("/main/notyourright");
      }
    }
    async function fetchProjectTask() {
      const res = await fetch("/main/devloginput/api");
      const data = await res.json();

      const userId = sessionStorage.getItem("userId");

      const userProjects = data.member_project.filter((mp: any) => mp.account_id == userId);

      console.log(data.member_project);

      // setProject(filteredProject);
      setProject(data.formattedProject);
      setTask(data.formattedTask);
    }
    fetchProjectTask();
  }, []);

  const handleInputNumberChange = (value: number | null) => {
    if (value !== null) {
      setFormData((prev) => ({
        ...prev,
        hours: value !== null ? value : 1,
      }));
    }
  };

  const handleSelectChange = (selectedOption: any, actionMeta: any) => {
    const { name } = actionMeta;
    if (name === "project") {
      setSelectedProject(selectedOption.value);
      const filtered = task.filter((t: any) => t.projectId === selectedOption.value);
      setFilteredTask(filtered);

      setFormData((prev) => ({
        ...prev,
        project: selectedOption.value,
        task: null,
      }));
    } else if (name === "task") {
      setFormData((prev) => ({
        ...prev,
        task: selectedOption.value,
      }));
    }
  };

  const handleCheckBoxChange = (e: CheckboxChangeEvent) => {
    setFormData((prev) => ({
      ...prev,
      overtime: e.target.checked,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      note: e.target.value,
    }));
  };

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setFormData((prev) => ({ ...prev, date: date ? date.format("YYYY-MM-DD") : "" }));
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
    window.location.reload();
  };

  return (
    <div className="p-5 flex gap-x-2">
      <div className="w-full">
        <div className="rounded-lg bg-white p-5">
          <div className="flex justify-between items-center my-5">
            {isMounted && <Select className="w-[35%]" onChange={handleSelectChange} name="project" options={project} />}
            {isMounted && (
              <Select className="w-[35%]" onChange={handleSelectChange} name="task" options={filteredTask} isDisabled={!selectedProject} />
            )}
            <div className="flex items-center gap-x-6">
              <label htmlFor="hours">Số giờ</label>
              <InputNumber
                value={formData.hours}
                min={1}
                max={24}
                onChange={handleInputNumberChange}
                type="number"
                style={{ width: 60, height: 35 }}
              />
              <label htmlFor="overtime">OT</label>
              <Checkbox name="overtime" id="overtime" onChange={handleCheckBoxChange}></Checkbox>
            </div>
          </div>
          <TextArea name="note" rows={4} placeholder="Ghi chú" onChange={handleTextAreaChange} />
          <Button onClick={handleSubmit} type="primary" className="mt-5" disabled={isButtonDisabled}>
            Add devlog
          </Button>
        </div>
      </div>
      <DatePicker onChange={handleDateChange} className="w-[30%] h-10" />
    </div>
  );
}
