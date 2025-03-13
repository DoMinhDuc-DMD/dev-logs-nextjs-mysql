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
        const [accounts] = await db.query("SELECT id, employee_name FROM account WHERE role = 'dev'");

        return NextResponse.json(accounts);
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const project = await req.json();


    } catch (error) {
        console.error("Lỗi khi lưu dữ liệu:", error);
        return NextResponse.json(
            { message: "Lỗi server khi lưu dữ liệu" },
            { status: 500 }
        );
    }
}