"use client";

import { Button } from "antd";
import ProjectModal from "./ProjectModal";
import DevlogCheckModal from "./DevlogCheckModal";
import { Task } from "@/app/main/projectlist/page";
import { useState } from "react";

interface ProjectListProps {
  projects: any[];
  tasks: Task[];
  defaultTasks: Task[];
  members: any[];
  memberRole: string;
  date: string;
}

export default function ProjectListComponent({ projects, tasks, defaultTasks, members, memberRole, date }: ProjectListProps) {
  const [isOpenProjectModal, setIsOpenProjectModal] = useState<{ [key: number]: boolean }>({});
  const [isOpenDevlogCheckModal, setIsOpenDevlogCheckModal] = useState<{ [key: number]: boolean }>({});

  const openProjectModal = (projectId: number) => {
    setIsOpenProjectModal((prev) => ({ ...prev, [projectId]: true }));
  };
  const openDevlogCheckModal = (projectId: number) => {
    setIsOpenDevlogCheckModal((prev) => ({ ...prev, [projectId]: true }));
  };

  const handleCloseModal = (projectId: number) => {
    setIsOpenProjectModal((prev) => ({ ...prev, [projectId]: false }));
    setIsOpenDevlogCheckModal((prev) => ({ ...prev, [projectId]: false }));
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
                <div className="font-semibold">Tên dự án: {project.project_name}</div>
                <div>Số lượng thành viên: {memberProject.length} người</div>
                <div>Số lượng task: {projectTask.length} task</div>
                <div>Mô tả dự án: {project.description}</div>
              </div>
              <div className="flex flex-col gap-y-3">
                <Button type="primary" onClick={() => openProjectModal(project.id)}>
                  Điều chỉnh dự án
                </Button>
                <Button type="primary" onClick={() => openDevlogCheckModal(project.id)}>
                  Theo dõi devlog
                </Button>
              </div>
            </div>
            <ProjectModal
              tasks={tasks}
              newTasks={[]}
              defaultTasks={defaultTasks}
              projectId={project.id}
              memberRole={memberRole}
              isOpenProjectModal={isOpenProjectModal}
              handleCloseModal={handleCloseModal}
            />
            <DevlogCheckModal
              project={project}
              date={date}
              memberProjects={memberProject}
              isOpenDevlogCheckModal={isOpenDevlogCheckModal}
              handleCloseModal={handleCloseModal}
            />
          </div>
        );
      })}
    </>
  );
}
