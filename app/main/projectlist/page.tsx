"use client";

import { Button, Input, Modal } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import axios from "axios";

interface Task {
  id: number;
  task_name_index: number;
  project_id: number;
  task_name: string;
}

export default function ProjectList() {
  const router = useRouter();

  const [project, setProject] = useState([]);
  const [task, setTask] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task[]>([]);
  const [defaultTask, setDefaultTask] = useState<Task[]>([]);

  const [member, setMember] = useState([]);
  const [memberRole, setMemberRole] = useState("");

  const disabledUpdate =
    !task.some((t, index) => t.task_name.trim() !== defaultTask[index].task_name.trim()) && newTask.every((t) => t.task_name.trim() === "");

  const [isModalOpen, setIsModalOpen] = useState<{ [key: number]: boolean }>({});
  const openModal = async (projectId: number) => {
    const res = await axios.get("/apis/projectlist");
    setTask(res.data.tasks || []);
    setDefaultTask(res.data.tasks || []);
    setIsModalOpen((prev) => ({ ...prev, [projectId]: true }));
    setNewTask([]);
  };
  const handleOK = (projectId: number) => {
    setIsModalOpen((prev) => ({ ...prev, [projectId]: false }));
  };
  const handleCloseModal = (projectId: number) => {
    setIsModalOpen((prev) => ({ ...prev, [projectId]: false }));
    setTask(defaultTask);
  };

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
      const res = await axios.get("/apis/projectlist");
      const data = await res.data;

      const filteredProject = data.projects.filter((project: any) =>
        data.members.some((member: any) => member.account_id === Number(userId) && member.project_id === project.id)
      );

      setProject(filteredProject || []);
      setTask(data.tasks || []);
      setDefaultTask(data.tasks || []);

      setMember(data.members || []);
    }
    fetchData();
  }, []);

  const handleTaskChange = (taskId: number, newTaskName: string) => {
    setTask((prev) => prev.map((task) => (task.id === taskId ? { ...task, task_name: newTaskName } : task)));
    setNewTask((prev) => prev.map((task) => (task.id === taskId ? { ...task, task_name: newTaskName } : task)));
  };

  const handleAddTask = (projectId: number) => {
    const projectTask = task.filter((t) => t.project_id === projectId);
    const projectNewTask = newTask.filter((t) => t.project_id === projectId);

    const lastTaskId = [...task, ...newTask].reduce((max, t) => (t.id > max ? t.id : max), 0);
    const lastTaskIndex = [...projectTask, ...projectNewTask].reduce((max, t) => (t.task_name_index > max ? t.task_name_index : max), 0);

    setNewTask((prev) => [
      ...prev,
      {
        id: lastTaskId + 1,
        task_name: "",
        project_id: projectId,
        task_name_index: lastTaskIndex + 1,
      },
    ]);
  };

  const handleRemoveTask = (projectId: number) => {
    setNewTask((prev) => {
      const projectNewTask = prev.filter((t) => t.project_id === projectId);

      if (projectNewTask.length > 0) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  };

  const handleUpdateTask = async (projectId: number) => {
    const updatedTasks = task.filter((t) => t.project_id === projectId);
    const newProjectTasks = newTask.filter((t) => t.project_id === projectId);

    const hasEmptyTask = [...updatedTasks, ...newProjectTasks].some((t) => t.task_name.trim() == "");
    if (hasEmptyTask) {
      alert("Tên task không được để trống");
      return;
    }

    try {
      await axios.post("/apis/projectlist", { updatedTasks, newProjectTasks });
      alert("Cập nhật thành công");

      setNewTask([]);
      handleCloseModal(projectId);
    } catch (error) {
      console.error("Lỗi cập nhật dự án:", error);
      alert("Đã xảy ra lỗi khi cập nhật dự án. Vui lòng kiểm tra lại.");
    }
  };

  return (
    <div className="p-5">
      <div className="w-full h-[85vh] p-5 rounded bg-white ">
        <div className="text-center mb-3">Danh sách các dự án</div>
        <div className="h-[95%] border rounded overflow-y-auto">
          {project.map((project: any) => {
            const memberProject = member.filter((member: any) => member.project_id === project.id);
            const projectTask = task.filter((task: any) => task.project_id === project.id);
            const newProjectTask = newTask.filter((task: any) => task.project_id === project.id);

            return (
              <div key={project.id} className={`flex flex-col items-center bg-blue-200 border rounded m-3 py-6 px-3`}>
                <div className="w-full flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Tên dự án: {project.name}</div>
                    <div>Số lượng thành viên: {memberProject.length} người</div>
                    <div>Số lượng task: {projectTask.length} task</div>
                    <div>Mô tả dự án: {project.description}</div>
                  </div>
                  <div>
                    <Button type="primary" onClick={() => openModal(project.id)}>
                      Điều chỉnh dự án
                    </Button>
                  </div>
                </div>
                <Modal
                  width={"50%"}
                  title="Điều chỉnh dự án"
                  open={isModalOpen[project.id] || false}
                  onOk={() => handleOK(project.id)}
                  onCancel={() => handleCloseModal(project.id)}
                >
                  <div className="flex w-full justify-between pt-3">
                    <div className="flex flex-col gap-y-3 w-[60%]">
                      {projectTask.map((task: any) => (
                        <Input
                          key={task.id}
                          value={task.task_name}
                          onChange={(e) => handleTaskChange(task.id, e.target.value)}
                          readOnly={memberRole !== "Leader"}
                        />
                      ))}
                      {newProjectTask.map((task: any) => (
                        <Input key={task.id} value={task.task_name} onChange={(e) => handleTaskChange(task.id, e.target.value)} />
                      ))}
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <Button
                        type="primary"
                        onClick={() => handleAddTask(project.id)}
                        disabled={projectTask.length === 6 || projectTask.length + newProjectTask.length === 6}
                      >
                        Thêm task mới
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => handleRemoveTask(project.id)}
                        disabled={newProjectTask.length === 0 || projectTask.length === 6}
                      >
                        Giảm task mới
                      </Button>
                      <Button type="primary" onClick={() => handleUpdateTask(project.id)} disabled={disabledUpdate}>
                        Cập nhật
                      </Button>
                    </div>
                  </div>
                </Modal>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
