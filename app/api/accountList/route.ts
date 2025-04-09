import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";
import { RowDataPacket } from "mysql2";

export async function GET() {
  try {
    const db = await openDB();
    const accounts = await db.all(
      `SELECT account.*, role.role_name AS role FROM account, role WHERE role.id != 1 AND account.role_id = role.id`
    );
    const role = await db.all("SELECT role_name FROM role WHERE role_name != 'Admin'");

    await db.close();

    const formattedRole = role.map((row: RowDataPacket) => ({ value: row.role_name, label: row.role_name }));

    return NextResponse.json({ accounts, formattedRole });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const db = await openDB();
    const { id, email, password, role } = await req.json();

    const roleRow = await db.get("SELECT id FROM role WHERE role_name = ?", role);
    if(!roleRow){
      return NextResponse.json({ message: "Role không hợp lệ"},{status:400});
    }
    const role_id = roleRow.id;

    await db.run(`UPDATE account SET 
      employee_work_email = ?, employee_work_password = ?, role_id = ? WHERE id = ?`, 
      [email,password,role_id,id]);

    await db.close();

    return NextResponse.json({ message: "Cập nhật thành công" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
