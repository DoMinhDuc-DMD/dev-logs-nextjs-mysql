"use client";

import { Task } from "@/app/main/projectlist/page";
import { Modal } from "antd";
import TaskList from "./TaskList";

interface ProjectModalProps {
  tasks: Task[];
  newTasks: Task[];
  defaultTasks: Task[];
  projectId: number;
  memberRole: string;
  isOpenModal: { [key: number]: boolean };
  handleOK: (projectId: number) => void;
  handleCloseModal: (projectId: number) => void;
}

export default function ProjectModal({ tasks, newTasks, defaultTasks, projectId, memberRole, isOpenModal, handleOK, handleCloseModal }: ProjectModalProps) {
  return (
    <Modal width={"50%"} title="Điều chỉnh dự án" open={isOpenModal[projectId] || false} onOk={() => handleOK(projectId)} onCancel={() => handleCloseModal(projectId)}>
      <TaskList projectId={projectId} tasks={tasks} newTasks={newTasks} defaultTasks={defaultTasks} memberRole={memberRole} handleCloseModal={handleCloseModal} />
    </Modal>
  );
}
