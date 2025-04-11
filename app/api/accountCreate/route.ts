import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";
import { Database } from "sqlite";
import { RowDataPacket } from "mysql2";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const db: Database = await openDB();
        const roles = await db.all("SELECT * FROM role WHERE id != 1");

        await db. close();
  
        const formattedRoles = roles.map((row:RowDataPacket) => ({
            value: row.role_name,
            label: row.role_name,
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
      const db: Database = await openDB();
  
      if (!email || !password || !role) {
        return NextResponse.json({ message: "Vui lòng nhập đầy đủ thông tin" }, { status: 400 });
      }
  
      const existingUser = await db.get("SELECT * FROM account WHERE employee_work_email = ?", email);
      if (existingUser) {
        return NextResponse.json({ message: "Email đã tồn tại" },{status:400});
      }

      const roleRow = await db.get(`SELECT id FROM role WHERE role_name = ?`, role);

      if (!roleRow) {
        return NextResponse.json({ message: "Role không hợp lệ" }, { status: 400 });
      }
      
      const role_id = roleRow.id;
      
      await db.run("INSERT INTO account (employee_work_email,employee_work_password,role_id) VALUES (?,?,?)", [email, password, role_id]);

      await db.close();
  
      return NextResponse.json({ message: "Đăng ký thành công" }, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}
