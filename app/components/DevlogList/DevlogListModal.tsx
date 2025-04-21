"use client";

import { AccountDevlog } from "@/app/main/DevlogList/page";
import { Button, Modal, Table } from "antd";
import Search from "antd/es/input/Search";
import { ChangeEvent } from "react";
import RestoreIcon from "@mui/icons-material/Restore";

interface DevlogListModalProps {
  data: AccountDevlog[];
  isModalOpen: boolean;
  searchDevlogInput: string;
  handleSearchDevlog: (value: string) => void;
  handleSearchDevlogChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleResetSelectedDevlog: () => void;
  closeModal: () => void;
}

export default function DevlogListModal({
  data,
  isModalOpen,
  searchDevlogInput,
  handleSearchDevlog,
  handleSearchDevlogChange,
  handleResetSelectedDevlog,
  closeModal,
}: DevlogListModalProps) {
  const columns = [
    {
      title: "STT",
      key: "id",
      width: "5%",
      align: "center" as const,
      render: (_: unknown, __: unknown, index: number) => index + 1,
    },
    {
      title: "Tên dự án",
      dataIndex: "project_name",
      key: "project_name",
      width: "20%",
      align: "center" as const,
    },
    {
      title: "Tên tác vụ",
      dataIndex: "task_name",
      key: "task_name",
      width: "20%",
      align: "center" as const,
    },

    {
      title: "Số giờ",
      dataIndex: "hours",
      key: "hours",
      width: "10%",
      align: "center" as const,
    },
    {
      title: "Thời gian nhập devlog",
      dataIndex: "date",
      key: "date",
      width: "15%",
      align: "center" as const,
    },
    {
      title: "Ghi chú",
      dataIndex: "note",
      key: "note",
      width: "20%",
      align: "center" as const,
    },
  ];

  return (
    <Modal
      width={"80%"}
      className="text-center"
      title={`Lịch sử nhập devlog của ${data[0]?.employee_work_email}`}
      open={isModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <div className="flex justify-end">
        <div className="flex gap-x-5 mb-3">
          <Button icon={<RestoreIcon />} onClick={handleResetSelectedDevlog}></Button>
          <Search
            placeholder="Nhập từ khóa"
            value={searchDevlogInput}
            onChange={handleSearchDevlogChange}
            onSearch={() => handleSearchDevlog(searchDevlogInput)}
            enterButton
          />
        </div>
      </div>
      <Table rowKey="id" columns={columns} dataSource={data} size="small" pagination={{ pageSize: 10 }} />
    </Modal>
  );
}
