import { NextResponse } from "next/server";
import db from "../connectdb/db";

export async function GET() {
  try {
    const [accounts] = await db.query("SELECT * FROM account");
    return NextResponse.json(accounts);
  } catch (error) {
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function PUT(req: any) {
  try {
    const {
      employee_name,
      employee_work_email,
      employee_work_password,
      employee_private_email,
      employee_phone_number,
      employee_birthday,
      employee_bank_account,
      employee_citizen_identification,
      employee_license_plate,
      userId,
    } = await req.json();
    if (!userId) {
      return NextResponse.json({ message: "Thiếu userId" }, { status: 400 });
    }
    await db.query(
      "UPDATE account SET employee_name = ?, employee_birthday = ?, employee_bank_account = ?, employee_private_email = ?,employee_phone_number = ?,employee_citizen_identification = ?,employee_work_email = ?,employee_work_password = ?,employee_license_plate = ? WHERE id = ?",
      [
        employee_name,
        employee_birthday,
        employee_bank_account,
        employee_private_email,
        employee_phone_number,
        employee_citizen_identification,
        employee_work_email,
        employee_work_password,
        employee_license_plate,
        userId,
      ]
    );

    return NextResponse.json({ message: "Cập nhật thành công" }, { status: 200 });
  } catch (error) {
    console.error("Lỗi cập nhật tài khoản:", error);
  }
}
