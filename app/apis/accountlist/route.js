import { NextResponse } from "next/server";
import db from "../../apis/connectdb/db";

export async function GET() {
    try {
        const [accounts] = await db.query("SELECT * FROM account WHERE role != 'Admin'");
        const [role] = await db.query("SELECT role FROM account WHERE role != 'Admin' GROUP BY role");
        const formattedRole = role.map((row) => ({ value: row.role, label: row.role }));
        return NextResponse.json({ accounts, formattedRole });
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const { id, email, password, role } = await req.json();
        await db.query("UPDATE account SET employee_work_email = ?, employee_work_password = ?, role = ? WHERE id = ?", [email, password, role, id]);
        return NextResponse.json({ message: "Cập nhật thành công" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}