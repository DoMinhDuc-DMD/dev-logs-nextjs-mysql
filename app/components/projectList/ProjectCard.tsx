"use client";

import { Button } from "antd";
import { Member, ProjectList, Task } from "../../main/ProjectList/page";

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
