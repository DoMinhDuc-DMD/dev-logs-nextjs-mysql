"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Select from "react-select";
import { DatePicker, Button, Checkbox, CheckboxChangeEvent, InputNumber } from "antd";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";

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
    const userRole = sessionStorage.getItem("userRole");
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }
    if (userRole !== "Leader" && userRole !== "Developer") {
      router.replace("/main/notyourright");
    }

    async function fetchProjectTask() {
      try {
        const res = await axios.get("/apis/devloginput");
        const data = await res.data;

        const filteredProject = data.formattedProject.filter((project: any) => project.accountId === Number(userId));

        setProject(filteredProject);
        setTask(data.formattedTask);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
    const res = await axios.post("/apis/devloginput", { ...formData, userId });
    const data = await res.data;
    alert(data.message);
    window.location.reload();
  };

  return (
    <div className="p-5 flex gap-x-2">
      <div className="w-full">
        <div className="rounded-lg bg-white p-5">
          <div className="flex justify-between items-center my-5">
            {isMounted && <Select className="w-[35%]" onChange={handleSelectChange} name="project" options={project} />}
            {isMounted && <Select className="w-[35%]" onChange={handleSelectChange} name="task" options={filteredTask} isDisabled={!selectedProject} />}
            <div className="flex items-center gap-x-6">
              <label htmlFor="hours">Số giờ</label>
              <InputNumber value={formData.hours} min={1} max={24} onChange={handleInputNumberChange} type="number" />
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
