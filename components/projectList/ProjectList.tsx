"use client";

import ProjectModal from "./ProjectModal";
import DevlogCheckModal from "./DevlogCheckModal";
import { Member, ProjectList, Task } from "@/app/main/projectList/page";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: ProjectList[];
  tasks: Task[];
  defaultTasks: Task[];
  members: Member[];
  memberRole: string;
  userId: string;
}

export default function ProjectListComponent({ projects, tasks, defaultTasks, members, memberRole, userId }: ProjectListProps) {
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
      {projects.map((project: ProjectList) => {
        const memberProject = members.filter((member: Member) => member.project_id === project.id);
        const projectTask = tasks.filter((task: Task) => task.project_id === project.id);
        return (
          <div key={project.id}>
            <ProjectCard
              project={project}
              memberProject={memberProject}
              projectTask={projectTask}
              memberRole={memberRole}
              openProjectModal={openProjectModal}
              openDevlogCheckModal={openDevlogCheckModal}
            />
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
              userId={userId}
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
