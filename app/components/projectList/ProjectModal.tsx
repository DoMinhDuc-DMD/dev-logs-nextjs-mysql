"use client";

import { Task } from "@/app/main/projectList/page";
import { Modal } from "antd";
import TaskList from "./TaskList";

interface ProjectModalProps {
  tasks: Task[];
  newTasks: Task[];
  defaultTasks: Task[];
  projectId: number;
  memberRole: string;
  isOpenProjectModal: { [key: number]: boolean };
  handleCloseModal: (projectId: number) => void;
}

export default function ProjectModal({
  tasks,
  newTasks,
  defaultTasks,
  projectId,
  memberRole,
  isOpenProjectModal,
  handleCloseModal,
}: ProjectModalProps) {
  return (
    <Modal
      width={"50%"}
      title="Điều chỉnh dự án"
      open={isOpenProjectModal[projectId] || false}
      onOk={() => handleCloseModal(projectId)}
      onCancel={() => handleCloseModal(projectId)}
    >
      <TaskList
        projectId={projectId}
        tasks={tasks}
        newTasks={newTasks}
        defaultTasks={defaultTasks}
        memberRole={memberRole}
        handleCloseModal={handleCloseModal}
      />
    </Modal>
  );
}
