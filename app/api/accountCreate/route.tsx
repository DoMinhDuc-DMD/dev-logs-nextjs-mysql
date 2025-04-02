import { NextResponse } from "next/server";
import db from "../connectdb/db";

export async function GET() {
  try {
    const [role]: any = await db.query("SELECT role FROM account WHERE role != 'Admin' GROUP BY role");

    const formattedRoles = role.map((row: any) => ({
      value: row.role.toLowerCase(),
      label: row.role,
    }));

    return NextResponse.json({ roles: formattedRoles });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req: any) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return NextResponse.json({ message: "Vui lòng nhập đầy đủ thông tin" }, { status: 400 });
    }

    const [existingUser]: any = await db.query("SELECT * FROM account WHERE employee_work_email = ?", [email]);
    if (existingUser.length > 0) {
      return NextResponse.json({ message: "Email đã tồn tại" });
    }

    await db.query("INSERT INTO account (employee_work_email,employee_work_password,role) VALUES (?,?,?)", [email, password, role]);

    return NextResponse.json({ message: "Đăng ký thành công" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
