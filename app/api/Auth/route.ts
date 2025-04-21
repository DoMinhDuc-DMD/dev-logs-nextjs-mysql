import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const db = await openDB();
    const { email, password } = await req.json();

    const user = await db.get(
      `SELECT account.*, role.role_name AS role FROM account, role WHERE account.role_id = role.id AND employee_work_email = ?`,
      email
    )

    if (!user || password !== user.employee_work_password) {
      return NextResponse.json(
        { 
          message: "Email hoặc mật khẩu không đúng!", 
          description: "Vui lòng kiểm tra lại!", 
          status: 401 
        }
      );
    }

    return NextResponse.json(
      {
        message: "Đăng nhập thành công1",
        description: "Đăng nhập hệ thống Devlog Manage!",
        userId: user.id,
        userRole: user.role,
        userName: user.employee_name,
        status: 200
      }
    );
  } catch (error) {
    console.error(error);
  }
}
