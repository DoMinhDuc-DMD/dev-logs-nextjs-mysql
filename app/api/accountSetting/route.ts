import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await openDB();
    const account = await db.all("SELECT account.*, role.role_name AS role FROM account, role WHERE account.role_id = role.id");

    await db.close();
    return NextResponse.json(account);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const db = await openDB();
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
    await db.run(
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

    await db.close();

    return NextResponse.json({ message: "Cập nhật thành công" }, { status: 200 });
  } catch (error) {
    console.error(error);
    console.error("Lỗi cập nhật tài khoản:", error);
  }
}
