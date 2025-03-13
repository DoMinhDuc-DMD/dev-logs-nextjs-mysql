import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

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
        if (!accounts || accounts.length === 0) {
            return NextResponse.json({ message: "Không tìm thấy tài khoản" }, { status: 404 });
        }

        return NextResponse.json(accounts[0]);
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}