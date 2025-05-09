import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await openDB();
    const account = await db.all("SELECT * FROM account");

    await db.close();
    return NextResponse.json(account);
  } catch (error) {
    console.error(error);
  }
}

export async function PUT(req: NextRequest) {
  try {
    const db = await openDB();
    const {
      employee_name,
      employee_private_email,
      employee_phone_number,
      employee_birthday,
      employee_bank_account,
      employee_citizen_identification,
      employee_license_plate,
      userId,
    } = await req.json();

    await db.run(`
      UPDATE account SET employee_name = ?, employee_birthday = ?, employee_bank_account = ?, employee_private_email = ?,employee_phone_number = ?,employee_citizen_identification = ?,employee_license_plate = ? WHERE id = ?`, 
      [employee_name, employee_birthday, employee_bank_account, employee_private_email, employee_phone_number, 
      employee_citizen_identification, employee_license_plate, userId,
      ]
    )
    await db.close();

    return NextResponse.json({ message: "Cập nhật thành công!" }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
