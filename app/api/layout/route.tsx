import { NextResponse } from "next/server";
import db from "../connectdb/db";

export async function GET() {
  try {
    const [notices] = await db.query(
      `SELECT notice_devlog.*, project.project_name FROM notice_devlog INNER JOIN project ON notice_devlog.project_id = project.id`
    );

    return NextResponse.json(notices, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
export const dynamic = "force-dynamic";
