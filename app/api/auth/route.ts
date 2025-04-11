import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";
import { Database } from "sqlite";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const db: Database = await openDB();

    const user = await db.get(
      "SELECT account.*, role.role_name AS role FROM account, role WHERE account.role_id = role.id AND employee_work_email = ?",
      email
    );

    await db.close();

    if (!user) {
      return NextResponse.json({ message: "Email không tồn tại" }, { status: 401 });
    }

    if (password !== user.employee_work_password) {
      return NextResponse.json({ message: "Sai mật khẩu" }, { status: 401 });
    }

    return NextResponse.json(
      {
        message: "Đăng nhập thành công",
        userId: user.id,
        isLogin: true,
        userRole: user.role,
        userName: user.employee_name,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Lỗi server:", error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
