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
    const [project] = await db.query("SELECT project_name FROM project");
    const [task] = await db.query("SELECT task_name FROM task");

    const formattedProject = project.map((row) => ({
      value: row.project_name.toLowerCase(),
      label: row.project_name,
    }));

    const formattedTask = task.map((row) => ({
      value: row.task_name.toLowerCase(),
      label: row.task_name,
    }));

    return NextResponse.json({ formattedProject, formattedTask });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);

    const { userId, hour, overtime, date, note } = body;

    if (!projectId || !taskId || !hour || !date) {
      return NextResponse.json(
        { message: "Vui lòng nhập đầy đủ thông tin" },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      `INSERT INTO devlog (hour, overtime, date, note) VALUES (?, ?, ?, ?)`,
      [project, position, hour, overtime ? 1 : 0, date, note]
    );

    const devlogId = result.insertId;
    await db.query(
      `INSERT INTO devlog_project (devlog_id, account_id) VALUES (?, ?)`,
      [devlogId, userId]
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
