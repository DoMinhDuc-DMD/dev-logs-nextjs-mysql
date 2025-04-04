import { NextResponse } from "next/server";
import db from "../connectdb/db";

export async function GET() {
  try {
    const [devlogData] = await db.query(`SELECT SUM(hours) AS total_hours, date, account_id FROM devlog GROUP BY date, account_id`);

    return NextResponse.json(devlogData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
