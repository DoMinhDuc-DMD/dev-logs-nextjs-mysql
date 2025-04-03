"use client";

import { DevlogList } from "@/app/main/devlogList/page";
import { Modal } from "antd";

interface DevlogListModalProps {
  selectedDevlog: DevlogList | null;
  closeModal: () => void;
}

export default function DevlogListModal({ selectedDevlog, closeModal }: DevlogListModalProps) {
  return (
    <Modal width={"50%"} title="Chi tiết devlog" open={!!selectedDevlog} onOk={closeModal} onCancel={closeModal}>
      {selectedDevlog && (
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-y-2">
            <div>
              <strong>Mã nhân viên: </strong>
              {selectedDevlog.employee_code}
            </div>
            <div>
              <strong>Email nhân viên: </strong>
              {selectedDevlog.employee_work_email}
            </div>
            <div>
              <strong>Tên dự án: </strong>
              {selectedDevlog.project_name}
            </div>
            <div>
              <strong>Tên tác vụ: </strong>
              {selectedDevlog.task_name}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div>
              <strong>Thời gian làm: </strong>
              {selectedDevlog.hours} giờ
            </div>
            <div>
              <strong>Overtime: </strong>
              {selectedDevlog.overtime ? "Có" : "Không"}
            </div>
            <div>
              <strong>Ghi chú: </strong>
              {selectedDevlog.note}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
