import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "devlog_manage",
});

export async function GET() {
  try {
    const [project] = await db.query("SELECT project.id,project.project_name, member_project.account_id FROM project INNER JOIN member_project ON project.id = member_project.project_id");
    const [task] = await db.query("SELECT * FROM task");

    const formattedProject = project.map((row) => ({
      value: row.id,
      label: row.project_name,
      accountId: row.account_id
    }));

    const formattedTask = task.map((row) => ({
      value: row.id,
      label: row.task_name,
      projectId: row.project_id
    }));

    return NextResponse.json({ formattedProject, formattedTask });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { userId, hours, overtime, date, note, project, task } = await req.json();

    if (!project || !task || !hours || !date) {
      return NextResponse.json(
        { message: "Vui lòng nhập đầy đủ thông tin" },
        { status: 400 }
      );
    }

    await db.query(
      `INSERT INTO devlog (hours, overtime, date, note, account_id, project_id, task_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [hours, overtime, date, note, userId, project, task]
    );

    return NextResponse.json({ message: "Thêm devlog thành công!" });
  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu:", error);
    return NextResponse.json(
      { message: "Lỗi server khi lưu dữ liệu" },
      { status: 500 }
    );
  }
}
