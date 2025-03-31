import { NextResponse } from "next/server";
import db from "../../apis/connectdb/db";

export async function GET() {
    try {
        const [projects] = await db.query("SELECT * FROM project");
        const [tasks] = await db.query("SELECT * FROM task");
        const [members] = await db.query(`SELECT member_project.*, account.employee_name, account.employee_work_email 
                                        FROM member_project 
                                        INNER JOIN account ON member_project.account_id = account.id`);

        return NextResponse.json({ projects, tasks, members }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { updatedTasks, newProjectTasks } = await req.json();

        if (!updatedTasks || !Array.isArray(updatedTasks) || updatedTasks.length === 0) {
            return NextResponse.json({ message: "Không có dữ liệu cập nhật" }, { status: 400 });
        }

        await Promise.all(updatedTasks.map(task =>
            db.query("UPDATE task SET task_name = ?, task_name_index = ? WHERE id = ?",
                [task.task_name, task.task_name_index, task.id])
        ));

        await Promise.all(newProjectTasks.map(task => {
            db.query("INSERT INTO task (task_name, project_id, task_name_index) VALUES (?, ?, ?)",
                [task.task_name, task.project_id, task.task_name_index])
        }))

        return NextResponse.json({ message: "Cập nhật thành công" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 })
    }
}