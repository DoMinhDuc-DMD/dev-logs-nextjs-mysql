import { NextRequest, NextResponse } from "next/server";
import db from "../connectdb/db";
import { RowDataPacket } from "mysql2/promise";

export async function GET() {
  try {
    const [roles] = await db.query<RowDataPacket[]>("SELECT role FROM account WHERE role != 'Admin' GROUP BY role");

    const formattedRoles = roles.map((row) => ({
      value: row.role.toLowerCase(),
      label: row.role,
    }));

    return NextResponse.json({ roles: formattedRoles });
  } catch (error) {
    console.error("Lỗi lấy danh sách role: ", error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return NextResponse.json({ message: "Vui lòng nhập đầy đủ thông tin" }, { status: 400 });
    }

    const [existingUser] = await db.query<RowDataPacket[]>("SELECT * FROM account WHERE employee_work_email = ?", [email]);
    if (existingUser.length > 0) {
      return NextResponse.json({ message: "Email đã tồn tại" });
    }

    await db.query("INSERT INTO account (employee_work_email,employee_work_password,role) VALUES (?,?,?)", [email, password, role]);

    return NextResponse.json({ message: "Đăng ký thành công" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
