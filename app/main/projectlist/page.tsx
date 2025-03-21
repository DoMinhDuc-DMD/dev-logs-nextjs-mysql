"use client";

import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";

export default function ProjectList() {
  const router = useRouter();
  const [project, setProject] = useState([]);
  const [task, setTask] = useState<{ id: number; task_name_index: number; project_id: number; task_name: string }[]>([
    { id: 0, task_name_index: 0, project_id: 0, task_name: "" },
  ]);
  const [newTask, setNewTask] = useState<{ id: number; task_name_index: number; project_id: number; task_name: string }[]>([]);
  const [member, setMember] = useState([]);
  const [memberRole, setMemberRole] = useState("");
  const [expandedCard, setExpandedCard] = useState<{ [key: number]: boolean }>({});
  const [defaultTaskLength, setDefaultTaskLength] = useState<{ [key: number]: number }>({});

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
      return;
    }
    setMemberRole(userRole);

    async function fetchData() {
      const res = await fetch("/main/projectlist/api", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Không thể lấy danh sách dự án");
      }

      const data = await res.json();

      const filteredProject = data.projects.filter((project: any) =>
        data.members.some((member: any) => member.account_id === Number(userId) && member.project_id === project.id)
      );

      const taskLength: { [key: number]: number } = {};
      filteredProject.forEach((project: any) => {
        taskLength[project.id] = data.tasks.filter((task: any) => task.project_id === project.id).length;
      });

      setDefaultTaskLength(taskLength);

      setProject(filteredProject || []);
      setTask(data.tasks || []);
      setMember(data.members || []);
    }
    fetchData();
  }, []);

  const handleAdjustProject = (index: number) => {
    setExpandedCard((prev: any) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleTaskChange = (taskId: number, newTaskName: string) => {
    setTask((prev) => prev.map((task) => (task.id === taskId ? { ...task, task_name: newTaskName } : task)));
    setNewTask((prev) => prev.map((task) => (task.id === taskId ? { ...task, task_name: newTaskName } : task)));
  };

  const handleAddTask = (projectId: number) => {
    const projectNewTask = newTask.filter((t) => t.project_id === projectId);
    const totalTask = (defaultTaskLength[projectId] || 0) + projectNewTask.length;

    if (totalTask >= 6) {
      alert("Số lượng task vượt quá 6");
      return;
    }

    setNewTask((prev) => [
      ...prev,
      {
        id: prev.length > 0 ? Math.max(...prev.map((t) => t.id)) + 1 : 1,
        task_name: "",
        project_id: projectId,
        task_name_index: projectNewTask.length + 1,
      },
    ]);
  };

  const handleRemoveTask = (projectId: number) => {
    setNewTask((prev) => {
      const projectNewTasks = prev.filter((task) => task.project_id === projectId);

      if (projectNewTasks.length > 0) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  };

  return (
    <div className="p-5">
      <div className="w-full h-[85vh] p-5 rounded bg-white text-center">
        <div className="mb-3">Danh sách các dự án</div>
        <div className="h-[95%] border rounded overflow-y-auto">
          {project.map((project: any, index: any) => {
            const projectName = project.project_name;
            const projectDescription = project.description;

            const memberProject = member.filter((member: any) => member.project_id === project.id);
            const taskProject = task.filter((task: any) => task.project_id === project.id);
            const newTaskProject = newTask;

            const isExpanded = expandedCard[index];

            return (
              <div key={project.id} className={`flex flex-col items-center border rounded m-3 py-6 px-3`}>
                <div className="w-full flex justify-between items-center">
                  <div className="text-left">
                    <div className="font-semibold">Tên dự án: {projectName}</div>
                    <div>Số lượng thành viên: {memberProject.length - 1} người</div>
                    <div>Số lượng task: {taskProject.length} task</div>
                    <div>Mô tả dự án: {projectDescription}</div>
                  </div>
                  <div>
                    <Button type="primary" onClick={() => handleAdjustProject(index)}>
                      {isExpanded ? "Hủy điều chỉnh" : "Điều chỉnh dự án"}
                    </Button>
                  </div>
                </div>
                {isExpanded && (
                  <div className="flex w-full justify-between pt-3">
                    <div className="flex flex-col gap-y-3 w-[60%]">
                      {taskProject.map((task: any) => (
                        <Input
                          key={task.id}
                          value={task.task_name}
                          onChange={(e) => handleTaskChange(task.id, e.target.value)}
                          disabled={memberRole !== "Leader"}
                        />
                      ))}
                      {newTaskProject.map((task: any) => (
                        <Input key={task.id} value={task.task_name} onChange={(e) => handleTaskChange(task.id, e.target.value)} />
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-3 justify-center">
                      <Button type="primary" onClick={() => handleAddTask(project.id)}>
                        Thêm task mới
                      </Button>
                      <Button type="primary" onClick={() => handleRemoveTask(project.id)}>
                        Giảm task mới
                      </Button>
                      <Button type="primary">Lưu</Button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
