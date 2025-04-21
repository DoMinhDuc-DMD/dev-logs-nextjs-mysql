import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
      const db = await openDB();

      const roles = await db.all("SELECT role_name FROM role");
      const account = await db.all("SELECT * FROM account");

      await db.close();

      const formattedRoles = roles.map((row) => ({
          value: row.role_name,
          label: row.role_name,
      }));

      return NextResponse.json({ roles: formattedRoles, account });
    } 
    catch (error) {
      console.error(error);
    }
}

export async function POST(req: NextRequest) {
  try {
    const db = await openDB();
    const { email, password, selectedRole, employee_name, employee_code, birthday, phone_number, citizen_id } = await req.json();

    const existingUser = await db.get("SELECT * FROM account WHERE employee_work_email = ?", email)
    if (existingUser) {
      return NextResponse.json({ message: "Email đã tồn tại!", status: 400 });
    }

    const roleRow = await db.get(`SELECT id FROM role WHERE role_name = ?`, selectedRole);

    const role_id = roleRow.id;

    await db.run(`
      INSERT INTO account (employee_work_email, employee_work_password, employee_name, employee_code, employee_birthday, employee_phone_number, employee_citizen_identification, role_id) VALUES (?,?,?,?,?,?,?,?)`, 
      [email, password, employee_name, employee_code, birthday, phone_number, citizen_id, role_id]
    );

    await db.close();

    return NextResponse.json({ message: "Tạo tài khoản thành công!", status: 201 });
  } catch (error) {
    console.error(error);
  }
}
