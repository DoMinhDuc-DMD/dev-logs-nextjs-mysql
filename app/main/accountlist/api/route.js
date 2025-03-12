import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "devlog_manage",
});

export async function GET() {
    try {
        const [accounts] = await db.query("SELECT id, email, password, role FROM account WHERE role != 'admin'");
        return NextResponse.json(accounts);
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}