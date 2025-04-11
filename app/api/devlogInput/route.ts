import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";
import { RowDataPacket } from "mysql2";

export async function GET() {
  try {
    const db = await openDB();
    const project = await db.all(
      "SELECT project.id, project.project_name, member_project.account_id FROM project INNER JOIN member_project ON project.id = member_project.project_id"
    );
    const task = await db.all("SELECT * FROM task");

    await db.close();

    const formattedProject = project.map((row:RowDataPacket) => ({
      value: row.id,
      label: row.project_name,
      accountId: row.account_id,
    }));

    const formattedTask = task.map((row:RowDataPacket) => ({
      value: row.id,
      label: row.task_name,
      projectId: row.project_id,
    }));

    return NextResponse.json({ formattedProject, formattedTask });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const db = await openDB();
    const { userId, hours, overtime, date, note, project, task } = await req.json();

    if (!project || !task || !hours || !date) {
      return NextResponse.json({ message: "Vui lòng nhập đầy đủ thông tin" }, { status: 400 });
    }

    await db.run(`INSERT INTO devlog (hours, overtime, date, note, account_id, project_id, task_id) VALUES (?, ?, ?, ?, ?, ?, ?)`, 
      [hours,overtime,date,note,userId,project,task,]);

    await db.close();

    return NextResponse.json({ message: "Thêm devlog thành công!" });
  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu:", error);
    return NextResponse.json({ message: "Lỗi server khi lưu dữ liệu" }, { status: 500 });
  }
}
