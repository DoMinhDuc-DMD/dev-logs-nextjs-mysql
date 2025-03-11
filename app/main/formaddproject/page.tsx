"use client";

export default function AddProject() {
  return (
    <div className="p-5">
      <div className="w-full text-center">
        <div className="grid grid-cols-2 text-left gap-x-2 rounded-lg bg-white p-5">
          <div className="">
            <label htmlFor="project-name">Tên dự án:</label>
            <input
              className="w-full my-2 p-1 border rounded-lg"
              name="project-name"
              type="text"
            />

            <label htmlFor="task-name">Tên công việc:</label>
            <input
              className="w-full my-2 p-1 border rounded-lg"
              name="task-name"
              type="text"
            />
            <label htmlFor="task-name">Tên công việc:</label>
            <input
              className="w-full my-2 p-1 border rounded-lg"
              name="task-name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="start-date">Thời gian bắt đầu:</label>
            <input
              className="w-[40%] block my-2 p-1 border rounded-lg"
              name="start-date"
              type="date"
            />
            <label htmlFor="end-date">Thời gian kết thúc(dự kiến):</label>
            <input
              className="w-[40%] block my-2 p-1 border rounded-lg"
              name="end-date"
              type="date"
            />
          </div>
        </div>
        <button className="bg-blue-400 p-2 mt-5 rounded cursor-pointer hover:bg-blue-600 hover:text-white">
          Add project
        </button>
      </div>
    </div>
  );
}
