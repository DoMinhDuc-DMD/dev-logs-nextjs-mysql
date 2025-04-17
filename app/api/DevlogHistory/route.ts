import { NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await openDB();
    const devlogData = await db.all(`SELECT devlog.hours, devlog.date, devlog.account_id, task.task_name_index 
      FROM devlog 
      JOIN task ON task.id = devlog.task_id
      ORDER BY devlog.date, task.task_name_index`);

    await db.close();
    
    return NextResponse.json(devlogData);
  } catch (error) {
    console.error(error);
  }
}
