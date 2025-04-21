import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await openDB();

    const account = await db.all("SELECT account.*, role.role_name as role FROM account, role WHERE role.id = account.role_id");
    const role = await db.all("SELECT * FROM role");

    await db.close();

    const formattedRole = role.map((row) => ({ value: row.role_name, label: row.role_name }));

    return NextResponse.json({ account, formattedRole });
  } catch (error) {
    console.error(error);
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, email, password, role } = await req.json();
    const db = await openDB();

    const row = await db.get("SELECT id FROM role WHERE role_name = ?", role);

    const role_id = row.id;
    
    await db.run(`UPDATE account SET employee_work_email = ?, employee_work_password = ?, role_id = ? WHERE id = ?`, 
      [email, password, role_id,id]);

    await db.close();

    return NextResponse.json({ message: "Cập nhật thành công!", status: 200 });
  } catch (error) {
    console.error(error);
  }
}
