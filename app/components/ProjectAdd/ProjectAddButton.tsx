"use client";

import { Button } from "antd";

interface ProjectAddButtonProps {
  tasks: { task_name: string; task_name_index: number }[];
  handleAddTask: () => void;
  handleRemoveTask: () => void;
  handleAddProject: () => void;
  isDisabled: boolean;
  disabled: boolean;
}

export default function ProjectAddButton({
  tasks,
  handleAddTask,
  handleRemoveTask,
  handleAddProject,
  isDisabled,
  disabled,
}: ProjectAddButtonProps) {
  return (
    <div className="flex justify-between items-center my-3">
      <div className="flex gap-x-3">
        <Button type="primary" onClick={handleAddTask} disabled={tasks.length === 6 || disabled}>
          Thêm task
        </Button>
        <Button color="danger" variant="solid" onClick={handleRemoveTask} disabled={tasks.length === 1 || disabled}>
          Giảm task
        </Button>
      </div>
      <Button type="primary" onClick={handleAddProject} disabled={isDisabled}>
        Tạo dự án
      </Button>
    </div>
  );
}
