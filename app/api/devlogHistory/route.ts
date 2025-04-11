import { NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export async function GET() {
  const db = await openDB();
  try {
    const devlogData = await db.all(`SELECT devlog.hours, devlog.date, devlog.account_id, task.task_name_index 
            FROM devlog 
            JOIN task ON task.id = devlog.task_id`);
    
    await db.close();
    
    return NextResponse.json(devlogData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
