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
        const [projects] = await db.query("SELECT * FROM project");
        const [tasks] = await db.query("SELECT * FROM task");
        const [members] = await db.query("SELECT * FROM member_project");

        return NextResponse.json({ projects, tasks, members }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}
