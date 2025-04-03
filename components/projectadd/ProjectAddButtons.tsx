"use client";

import { Button } from "antd";

interface ProjectAddButtons {
  tasks: { task_name: string; task_name_index: number }[];
  handleAddTask: () => void;
  handleRemoveTask: () => void;
  handleAddProject: () => void;
  isDisabled: boolean;
}

export default function ProjectAddButtons({ tasks, handleAddTask, handleRemoveTask, handleAddProject, isDisabled }: ProjectAddButtons) {
  return (
    <div className="flex justify-between items-center my-3">
      <div className="flex gap-x-3">
        <Button type="primary" onClick={handleAddTask} disabled={tasks.length === 6}>
          Thêm task
        </Button>
        <Button color="danger" variant="solid" onClick={handleRemoveTask} disabled={tasks.length === 1}>
          Giảm task
        </Button>
      </div>
      <Button type="primary" onClick={handleAddProject} disabled={isDisabled}>
        Tạo dự án
      </Button>
    </div>
  );
}
