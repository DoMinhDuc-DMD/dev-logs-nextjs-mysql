"use client";

interface DevlogHistoryHeaderProps {
  userName: string;
}

export default function DevlogHistoryHeader({ userName }: DevlogHistoryHeaderProps) {
  const tasks = Array.from({ length: 6 }, (_, i) => `Tác vụ ${i + 1}`);
  return (
    <div className="grid grid-rows-9" style={{ position: "sticky", left: 0, zIndex: 10 }}>
      <div className="flex border px-5 items-center justify-center bg-blue-300">{userName}</div>
      <div className="flex border px-5 items-center justify-center bg-blue-200 font-bold">Tác vụ</div>
      {tasks.map((task, index) => (
        <div key={index} className="flex border px-5 items-center bg-gray-200">
          {task}
        </div>
      ))}
      <div className="flex border px-5 items-center bg-gray-400">Tổng</div>
    </div>
  );
}
