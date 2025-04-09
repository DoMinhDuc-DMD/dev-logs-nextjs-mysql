import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";
import db from "../connectdb/db";
import { RowDataPacket } from "mysql2";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const userId = searchParams.get("id");

    const [accounts] = await db.query<RowDataPacket[]>("SELECT * FROM account WHERE id = ?", [userId]);

    const user = accounts[0];
    if (user.employee_birthday) {
      user.employee_birthday = dayjs(new Date(user.employee_birthday)).format("DD/MM/YYYY");
    }
    if (!accounts || accounts.length === 0) {
      return NextResponse.json({ message: "Không tìm thấy tài khoản" }, { status: 404 });
    }

    return NextResponse.json(accounts[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
