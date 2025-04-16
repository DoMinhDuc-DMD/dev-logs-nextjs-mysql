import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const db = await openDB();
    const searchParams = new URL(req.url).searchParams;
    const userId = Number(searchParams.get("id"));

    const account = await db.get(`SELECT account.*, role.role_name AS role FROM account, role WHERE account.role_id = role.id AND account.id = ?`, [userId])
    
    await db.close();

    if (!account) {
      return NextResponse.json({ message: "Không tìm thấy tài khoản" }, { status: 404 });
    }

    return NextResponse.json(account);
  } catch (error) {
    console.error(error);
  }
}
