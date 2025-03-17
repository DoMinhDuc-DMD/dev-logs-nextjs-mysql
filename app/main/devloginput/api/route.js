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
    const [project] = await db.query("SELECT * FROM project");
    const [task] = await db.query("SELECT * FROM task");

    const formattedProject = project.map((row) => ({
      value: row.id,
      label: row.project_name,
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

    const [result] = await db.query(
      `INSERT INTO devlog (hours, overtime, date, note) VALUES (?, ?, ?, ?)`,
      [hours, overtime, date, note]
    );

    const devlogId = result.insertId;
    await db.query(
      `INSERT INTO devlog_project (devlog_id, account_id, project_id, task_id) VALUES (?, ?, ?, ?)`,
      [devlogId, userId, project, task]
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
