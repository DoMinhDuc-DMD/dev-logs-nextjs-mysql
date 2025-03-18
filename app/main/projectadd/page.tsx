"use client";

import { Button, DatePicker, Input } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Select from "react-select";
import "@ant-design/v5-patch-for-react-19";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";

interface Dev {
  id: number;
  employee_name: string;
}

export default function AddProject() {
  const router = useRouter();
  const [dev, setDev] = useState<Dev[]>([]);
  const [project, setProject] = useState({
    project_name: "",
    start_date: null,
    end_date: null,
    description: "",
    members: [],
  });
  const [tasks, setTasks] = useState<string[]>([""]);
  const isDisabled =
    !project.project_name.trim() || tasks.every((t) => t.trim() === "") || !project.start_date || !project.end_date || project.members.length === 0;

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
      } else if (userRole !== "Leader") {
        router.replace("/main/notyourright");
      }
    }

    async function fetchData() {
      const res = await fetch("/main/projectadd/api", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Không thể lấy danh sách tài khoản");
      }

      const data: Dev[] = await res.json();
      setDev(Array.isArray(data) ? data : []);
    }
    fetchData();
  }, []);

  const handleAddProject = async () => {
    try {
      const res = await fetch("/main/projectadd/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...project,
          tasks: tasks.filter((t) => t.trim() !== ""),
        }),
      });

      const responseData = await res.json();
      if (!res.ok) {
        console.error("Lỗi từ server:", responseData);
        alert(responseData.message || "Có lỗi xảy ra, vui lòng thử lại.");
        return;
      }
      alert("Thêm dự án thành công!");
      window.location.reload();
    } catch (error) {
      console.error("Lỗi thêm dự án:", error);
      alert("Đã xảy ra lỗi khi thêm dự án. Vui lòng kiểm tra lại.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (name: string, date: dayjs.Dayjs | null) => {
    setProject((prev) => ({
      ...prev,
      [name]: date ? date.format("YYYY-MM-DD") : "",
    }));
  };

  const handleTasksChange = (index: number, value: string) => {
    const newTasks = [...tasks];
    newTasks[index] = value;
    setTasks(newTasks);
  };

  const handleSelectChange = (selectedDev: any) => {
    const selectedMembers = selectedDev.map((option: any) => option.value);
    setProject((prev) => ({ ...prev, members: selectedMembers }));
  };

  const handleAddTasks = () => {
    if (tasks.length < 6) {
      setTasks([...tasks, ""]);
    }
  };

  const handleRemoveTasks = () => {
    if (tasks.length > 1 && tasks.length <= 6) {
      setTasks(tasks.slice(0, -1));
    }
  };

  return (
    <div className="p-5">
      <div className="w-full text-center rounded-lg bg-white p-5">
        <h1 className="text-2xl font-bold">Thêm dự án</h1>
        <div className="flex justify-between items-center my-3">
          <div className="flex gap-x-3">
            <Button type="primary" onClick={handleAddTasks} disabled={tasks.length === 6}>
              Thêm task
            </Button>
            <Button color="danger" variant="solid" onClick={handleRemoveTasks} disabled={tasks.length === 1}>
              Giảm task
            </Button>
          </div>
          <Button type="primary" onClick={handleAddProject} disabled={isDisabled}>
            Tạo dự án
          </Button>
        </div>
        <div className="grid grid-cols-2 text-left gap-x-10">
          <div>
            <div className="flex items-center justify-between py-1">
              <label htmlFor="project_name">Tên dự án:</label>
              <Input name="project_name" style={{ width: "70%", padding: "8px" }} onChange={handleChange} />
            </div>
            {tasks.map((t, index) => (
              <div key={index} className="flex items-center justify-between my-2">
                <label htmlFor={`tasks_name_${index}`}>Tên task {index + 1}:</label>
                <Input
                  name={`tasks_name_${index}`}
                  style={{ width: "70%", padding: "8px" }}
                  value={t}
                  onChange={(e) => handleTasksChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="select_dev">Thành viên tham gia:</label>
              {dev.length > 0 && (
                <Select
                  className="w-[60%] p-1"
                  isMulti
                  name="select_dev"
                  options={dev.map((dev) => ({ value: dev.id, label: dev.employee_name }))}
                  onChange={handleSelectChange}
                />
              )}
            </div>
            <div className="flex items-center justify-between my-2">
              <label htmlFor="start_date">Thời gian bắt đầu:</label>
              <DatePicker style={{ width: "50%", padding: "8px" }} onChange={(date) => handleDateChange("start_date", date)} />
            </div>
            <div className="flex items-center justify-between my-2">
              <label htmlFor="end_date">Thời gian kết thúc (dự kiến):</label>
              <DatePicker style={{ width: "50%", padding: "8px" }} onChange={(date) => handleDateChange("end_date", date)} />
            </div>
            <label htmlFor="description">Mô tả dự án:</label>
            <TextArea rows={8} name="description" placeholder="Nhập mô tả dự án..." onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
