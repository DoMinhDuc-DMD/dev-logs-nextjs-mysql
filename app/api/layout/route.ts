import { NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await openDB();
    const notices = await db.all(
      `SELECT notice_devlog.*, project.project_name FROM notice_devlog INNER JOIN project ON notice_devlog.project_id = project.id ORDER BY notice_devlog.date DESC`
    );

    return NextResponse.json(notices, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
