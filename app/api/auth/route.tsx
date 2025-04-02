import { NextResponse } from "next/server";
import db from "../connectdb/db";

export async function POST(req: any) {
  try {
    const { email, password } = await req.json();

    const [rows]: any = await db.query("SELECT * FROM account WHERE employee_work_email = ?", [email]);

    if (!rows || rows.length === 0) {
      return NextResponse.json({ message: "Email không tồn tại" }, { status: 401 });
    }

    const user = rows[0];

    if (password !== rows[0].employee_work_password) {
      return NextResponse.json({ message: "Sai mật khẩu" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Đăng nhập thành công",
      userId: user.id,
      isLogin: true,
      userRole: user.role,
      userName: user.employee_name,
    });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
