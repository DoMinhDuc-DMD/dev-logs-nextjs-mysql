import { NextResponse } from "next/server";
import db from "../connectdb/db";

export async function GET() {
  try {
    const [devlogData] = await db.query(`SELECT devlog.hours, devlog.date, devlog.account_id, task.task_name_index 
            FROM devlog 
            JOIN task ON task.id = devlog.task_id`);

    return NextResponse.json(devlogData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
