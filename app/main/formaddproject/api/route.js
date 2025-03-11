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
        const body = await req.json();
    } catch (error) {
        console.error("Lỗi khi lưu dữ liệu:", error);
        return NextResponse.json(
            { message: "Lỗi server khi lưu dữ liệu" },
            { status: 500 }
        );
    }
}