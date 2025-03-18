import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { format } from "date-fns";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "devlog_manage",
});

export async function GET(req) {
    try {
        const searchParams = new URL(req.url).searchParams;
        const userId = searchParams.get("id");

        const [accounts] = await db.query("SELECT * FROM account WHERE id = ?", [userId]);

        const user = accounts[0];
        if (user.employee_birthday) {
            user.employee_birthday = format(new Date(user.employee_birthday), 'dd/MM/yyyy');
        }
        if (!accounts || accounts.length === 0) {
            return NextResponse.json({ message: "Không tìm thấy tài khoản" }, { status: 404 });
        }

        return NextResponse.json(accounts[0]);
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}