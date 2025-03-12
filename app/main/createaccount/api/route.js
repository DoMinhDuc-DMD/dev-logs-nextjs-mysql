import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "devlog_manage",
});

export async function POST(req) {
    try {
        const { email, password, role } = await req.json();

        if (!email || !password || !role) {
            return NextResponse.json({ message: "Vui lòng nhập đầy đủ thông tin" }, { status: 400 });
        }

        const [existingUser] = await db.query("SELECT * FROM account WHERE email = ?", [email]);
        if (existingUser.length > 0) {
            return NextResponse.json({ message: "Email đã tồn tại" });
        }

        await db.query("INSERT INTO account (email,password,role) VALUES (?,?,?)", [email, password, role])

        return NextResponse.json({ message: "Đăng ký thành công" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}
