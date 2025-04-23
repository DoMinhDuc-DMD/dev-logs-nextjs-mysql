"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { DatePicker, Button, Checkbox, CheckboxChangeEvent, InputNumber, notification } from "antd";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";
import useAuthGuard from "@/app/hooks/useAuthGuard";
import DevlogInputSelect from "@/app/components/DevlogInput/DevlogInputSelect";
import { UserRole } from "@/app/constant/roleAuth";
import { GET_DATE_MINUTE_FORMAT } from "@/app/constant/dateFormat";

export default function Form() {
  const router = useRouter();

  const [project, setProject] = useState([]);
  const [task, setTask] = useState([]);
  const [filteredTask, setFilteredTask] = useState([]);

  const [selectedProject, setSelectedProject] = useState<number>();
  const [formData, setFormData] = useState({
    hours: 1,
    overtime: false,
    note: "",
    date: "",
    project: 0,
    task: 0,
  });
  const isButtonDisabled = !formData.date || !formData.hours || !formData.project || !formData.task;
  const [submitted, setSubmitted] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (msg: string) =>
    api.info({
      message: msg,
      placement: "topRight",
      duration: 2,
      style: {
        width: 400,
        borderRadius: 10,
      },
    });

  useAuthGuard([UserRole.Leader, UserRole.Developer]);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");

    async function fetchProjectTask() {
      try {
        const res = await axios.get("/api/DevlogInput");
        const data = await res.data;

        const filteredProject = data.formattedProject.filter((project) => project.accountId === Number(userId));

        setProject(filteredProject);
        setTask(data.formattedTask);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProjectTask();
  }, [router]);

  const handleInputNumberChange = (value: number | null) => {
    if (value !== null) {
      setFormData((prev) => ({
        ...prev,
        hours: value !== null ? value : 1,
      }));
    }
  };

  const handleSelectChange = (fields: "project" | "task", selectedOption: number) => {
    if (fields === "project") {
      setSelectedProject(selectedOption);
      const filtered = task.filter((t: { projectId: number }) => t.projectId === selectedOption);
      setFilteredTask(filtered);
    }

    setFormData((prev) => ({
      ...prev,
      [fields]: selectedOption,
    }));
  };

  const handleCheckBoxChange = (e: CheckboxChangeEvent) => {
    setFormData((prev) => ({
      ...prev,
      overtime: e.target.checked,
    }));
  };

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      note: e.target.value,
    }));
  };

  const handleDateChange = (date: dayjs.Dayjs | "") => {
    setFormData((prev) => ({ ...prev, date: dayjs(date).format(GET_DATE_MINUTE_FORMAT) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userId = sessionStorage.getItem("userId");
    const res = await axios.post("/api/DevlogInput", { ...formData, userId });

    openNotification(res.data.message);

    setSubmitted(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      {contextHolder}
      <div className="p-5 flex gap-x-2">
        <div className="w-full">
          <div className="rounded-lg bg-white p-5">
            <div className="flex justify-between items-center my-5">
              <DevlogInputSelect name="project" options={project} submitted={submitted} handleSelectChange={handleSelectChange} />
              <DevlogInputSelect
                name="task"
                options={filteredTask}
                submitted={!selectedProject || submitted}
                handleSelectChange={handleSelectChange}
              />
              <div className="flex items-center gap-x-6">
                <label htmlFor="hours">Số giờ:</label>
                <InputNumber
                  value={formData.hours}
                  min={1}
                  max={24}
                  onChange={handleInputNumberChange}
                  type="number"
                  disabled={submitted}
                />
                <label htmlFor="overtime">OT</label>
                <Checkbox name="overtime" id="overtime" onChange={handleCheckBoxChange} disabled={submitted}></Checkbox>
              </div>
            </div>
            <TextArea name="note" rows={4} placeholder="Ghi chú" onChange={handleTextAreaChange} disabled={submitted} />
            <Button onClick={handleSubmit} type="primary" className="mt-5" disabled={isButtonDisabled || submitted}>
              Lưu devlog
            </Button>
          </div>
        </div>
        <DatePicker
          format={GET_DATE_MINUTE_FORMAT}
          showTime={{ defaultValue: dayjs("00:00", "HH:mm") }}
          onChange={handleDateChange}
          placeholder="Chọn ngày"
          className="w-[400px] h-10"
          disabled={submitted}
        />
      </div>
    </>
  );
}
