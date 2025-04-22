"use client";

import { Button } from "antd";
import { Member, ProjectList, Task } from "@/app/main/ProjectList/page";

interface ProjectCardProps {
  project: ProjectList;
  memberProject: Member[];
  projectTask: Task[];
  memberRole: string;
  openProjectModal: (projectId: number) => void;
  openDevlogCheckModal: (projectId: number) => void;
}

export default function ProjectCard({
  project,
  memberProject,
  projectTask,
  memberRole,
  openProjectModal,
  openDevlogCheckModal,
}: ProjectCardProps) {
  return (
    <div key={project.id} className="flex flex-col items-center bg-blue-200 border rounded m-3 p-3">
      <div className="w-full flex justify-between items-center">
        <div>
          <div>
            <strong>Tên dự án:</strong> {project.project_name}
          </div>
          <div>
            <strong>Số lượng thành viên:</strong> {memberProject.length} người
          </div>
          <div>
            <strong>Số lượng tác vụ:</strong> {projectTask.length} tác vụ
          </div>
          <div>
            <strong>Mô tả dự án:</strong> {project.description}
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <Button type="primary" onClick={() => openProjectModal(project.id)}>
            Sửa tác vụ
          </Button>
          {memberRole === "Leader" && (
            <Button type="primary" onClick={() => openDevlogCheckModal(project.id)}>
              Theo dõi devlog
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
