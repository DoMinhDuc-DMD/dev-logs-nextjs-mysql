import { NextRequest, NextResponse } from "next/server";
import db from "../connectdb/db";
import { RowDataPacket } from "mysql2";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const [rows] = await db.query<RowDataPacket[]>("SELECT * FROM account WHERE employee_work_email = ?", [email]);

    if (!rows || rows.length === 0) {
      return NextResponse.json({ message: "Email không tồn tại" }, { status: 401 });
    }

    const user = rows[0];

    if (password !== rows[0].employee_work_password) {
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
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Chấp nhận mọi origin (có thể thay thế bằng origin cụ thể)
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Cho phép các method
          "Access-Control-Allow-Headers": "Content-Type", // Cho phép các headers
        },
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
