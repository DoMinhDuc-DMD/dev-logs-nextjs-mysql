import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "devlog_manage",
});

export async function POST(req) {
  try {
    const body = await req.json();
    console.log(body);

    const { userId, project, position, hour, overtime, date, note } = body;

    console.log("Received data:", {
      userId,
      project,
      position,
      hour,
      overtime,
      date,
      note,
    });
    if (!userId || !project || !position || !hour || !date) {
      return NextResponse.json(
        { message: "Vui lòng nhập đầy đủ thông tin" },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      `INSERT INTO devlog (project, position, hour, overtime, date, note) VALUES (?, ?, ?, ?, ?, ?)`,
      [project, position, hour, overtime ? 1 : 0, date, note]
    );

    const devlogId = result.insertId;
    await db.query(
      `INSERT INTO account_devlog (account_id, devlog_id) VALUES (?, ?)`,
      [userId, devlogId]
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
