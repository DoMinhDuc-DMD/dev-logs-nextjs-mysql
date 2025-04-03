"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DatePicker, Button, Checkbox, CheckboxChangeEvent, InputNumber, message, Select } from "antd";
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
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");
    const userId = sessionStorage.getItem("userId");
    const loggedIn = sessionStorage.getItem("isLogin");

    if (!userRole || !userId || !loggedIn) {
      router.replace("/auth");
      return;
    }
    if (userRole !== "Leader" && userRole !== "Developer") {
      router.replace("/main/notYourRight");
    }

    async function fetchProjectTask() {
      try {
        const res = await axios.get("/api/devlogInput");
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

  const handleSelectProject = (selectedOption: any) => {
    setSelectedProject(selectedOption);
    const filtered = task.filter((t: any) => t.projectId === selectedOption);

    setFilteredTask(filtered);

    setFormData((prev) => ({
      ...prev,
      project: selectedOption,
    }));
  };

  const handleSelectTask = (selectedOption: any) => {
    setFormData((prev) => ({
      ...prev,
      task: selectedOption,
    }));
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
    const res = await axios.post("/api/devlogInput", { ...formData, userId });
    const data = await res.data;
    messageApi.info(data.message);
    window.location.reload();
  };

  return (
    <>
      {contextHolder}
      <div className="p-5 flex gap-x-2">
        <div className="w-full">
          <div className="rounded-lg bg-white p-5">
            <div className="flex justify-between items-center my-5">
              <Select
                showSearch
                style={{ width: "30%" }}
                placeholder="Select project"
                optionFilterProp="label"
                options={project}
                onChange={handleSelectProject}
              />
              <Select
                showSearch
                style={{ width: "30%" }}
                placeholder="Select task"
                optionFilterProp="label"
                options={filteredTask}
                onChange={handleSelectTask}
                disabled={!selectedProject}
              />
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
    </>
  );
}
