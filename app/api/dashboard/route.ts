import { NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await openDB();
    const devlogData = await db.all(`SELECT SUM(hours) AS total_hours, date, account_id FROM devlog GROUP BY date, account_id`);

  await db.close()

    return NextResponse.json(devlogData);
  } catch (error) {
    console.error(error);
  }
}
