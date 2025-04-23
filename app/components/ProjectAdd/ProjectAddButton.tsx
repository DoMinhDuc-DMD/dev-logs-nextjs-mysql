"use client";

import { Button } from "antd";

interface ProjectAddButtonProps {
  tasks: { task_name: string; task_name_index: number }[];
  handleNumberTasks: (name: string) => void;
  handleAddProject: () => void;
  isDisabled: boolean;
  submitted: boolean;
}

export default function ProjectAddButton({ tasks, handleNumberTasks, handleAddProject, isDisabled, submitted }: ProjectAddButtonProps) {
  return (
    <div className="flex justify-between items-center my-3">
      <div className="flex gap-x-3">
        <Button type="primary" onClick={() => handleNumberTasks("addTask")} disabled={tasks.length === 6 || submitted}>
          Thêm task
        </Button>
        <Button color="danger" variant="solid" onClick={() => handleNumberTasks("removeTask")} disabled={tasks.length === 1 || submitted}>
          Giảm task
        </Button>
      </div>
      <Button type="primary" onClick={handleAddProject} disabled={isDisabled || submitted}>
        Tạo dự án
      </Button>
    </div>
  );
}
