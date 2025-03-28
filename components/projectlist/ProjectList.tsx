"use client";

import { Button } from "antd";
import ProjectModal from "./ProjectModal";
import { Task } from "@/app/main/projectlist/page";
import { useState } from "react";

interface ProjectListProps {
  projects: any[];
  tasks: Task[];
  defaultTasks: Task[];
  members: any[];
  memberRole: string;
}

export default function ProjectListComponent({ projects, tasks, defaultTasks, members, memberRole }: ProjectListProps) {
  const [isOpenModal, setIsOpenModal] = useState<{ [key: number]: boolean }>({});
  const openModal = (projectId: number) => {
    setIsOpenModal((prev) => ({ ...prev, [projectId]: true }));
  };

  const handleOK = (projectId: number) => {
    setIsOpenModal((prev) => ({ ...prev, [projectId]: false }));
  };
  const handleCloseModal = (projectId: number) => {
    setIsOpenModal((prev) => ({ ...prev, [projectId]: false }));
  };
  return (
    <>
      {projects.map((project: any) => {
        const memberProject = members.filter((member: any) => member.project_id === project.id);
        const projectTask = tasks.filter((task: any) => task.project_id === project.id);
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
            <ProjectModal
              tasks={tasks}
              newTasks={[]}
              defaultTasks={defaultTasks}
              projectId={project.id}
              memberRole={memberRole}
              isOpenModal={isOpenModal}
              handleOK={handleOK}
              handleCloseModal={handleCloseModal}
            />
          </div>
        );
      })}
    </>
  );
}
