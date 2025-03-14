import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "devlog_manage",
});

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const [rows] = await db.query("SELECT * FROM account WHERE employee_work_email = ?", [
      email,
    ]);

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { message: "Email không tồn tại" },
        { status: 401 }
      );
    }

    const user = rows[0];

    if (password !== rows[0].employee_work_password) {
      return NextResponse(JSON.stringify({ message: "Sai mật khẩu" }), {
        status: 401,
      });
    }

    return NextResponse.json({
      message: "Đăng nhập thành công",
      userId: user.id,
      isLogin: true,
      userRole: user.role,
    });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
