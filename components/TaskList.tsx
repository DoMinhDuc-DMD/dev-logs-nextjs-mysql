// "use client";

// import { Button, Input } from "antd";

// export default function TaskList() {
//   const handleTaskChange = (taskId: number, newTaskName: string) => {
//     setTask((prev) => prev.map((task) => (task.id === taskId ? { ...task, task_name: newTaskName } : task)));
//     setNewTask((prev) => prev.map((task) => (task.id === taskId ? { ...task, task_name: newTaskName } : task)));
//   };

//   const handleAddTask = (projectId: number) => {
//     const projectTask = task.filter((t) => t.project_id === projectId);
//     const projectNewTask = newTask.filter((t) => t.project_id === projectId);

//     const lastTaskId = [...task, ...newTask].reduce((max, t) => (t.id > max ? t.id : max), 0);
//     const lastTaskIndex = [...projectTask, ...projectNewTask].reduce((max, t) => (t.task_name_index > max ? t.task_name_index : max), 0);

//     setNewTask((prev) => [
//       ...prev,
//       {
//         id: lastTaskId + 1,
//         task_name: "",
//         project_id: projectId,
//         task_name_index: lastTaskIndex + 1,
//       },
//     ]);
//   };

//   const handleRemoveTask = (projectId: number) => {
//     setNewTask((prev) => {
//       const projectNewTask = prev.filter((t) => t.project_id === projectId);

//       if (projectNewTask.length > 0) {
//         return prev.slice(0, -1);
//       }
//       return prev;
//     });
//   };

//   const handleUpdateTask = async (projectId: number) => {
//     const updatedTasks = task.filter((t) => t.project_id === projectId);
//     const newProjectTasks = newTask.filter((t) => t.project_id === projectId);

//     const hasEmptyTask = [...updatedTasks, ...newProjectTasks].some((t) => t.task_name.trim() == "");
//     if (hasEmptyTask) {
//       alert("Tên task không được để trống");
//       return;
//     }

//     try {
//       await axios.post("/apis/projectlist", { updatedTasks, newProjectTasks });
//       alert("Cập nhật thành công");

//       setNewTask([]);
//       handleCloseModal(projectId);
//     } catch (error) {
//       console.error("Lỗi cập nhật dự án:", error);
//       alert("Đã xảy ra lỗi khi cập nhật dự án. Vui lòng kiểm tra lại.");
//     }
//   };
//   return (
//     <div className="flex w-full justify-between pt-3">
//       <div className="flex flex-col gap-y-3 w-[60%]">
//         {projectTask.map((task: any) => (
//           <Input
//             key={task.id}
//             value={task.task_name}
//             onChange={(e) => handleTaskChange(task.id, e.target.value)}
//             readOnly={memberRole !== "Leader"}
//           />
//         ))}
//         {newProjectTask.map((task: any) => (
//           <Input key={task.id} value={task.task_name} onChange={(e) => handleTaskChange(task.id, e.target.value)} />
//         ))}
//       </div>
//       <div className="flex flex-col gap-y-3">
//         <Button
//           type="primary"
//           onClick={() => handleAddTask(project.id)}
//           disabled={projectTask.length === 6 || projectTask.length + newProjectTask.length === 6}
//         >
//           Thêm task mới
//         </Button>
//         <Button type="primary" onClick={() => handleRemoveTask(project.id)} disabled={newProjectTask.length === 0 || projectTask.length === 6}>
//           Giảm task mới
//         </Button>
//         <Button type="primary" onClick={() => handleUpdateTask(project.id)} disabled={disabledUpdate}>
//           Cập nhật
//         </Button>
//       </div>
//     </div>
//   );
// }
