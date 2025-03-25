import { NextResponse } from "next/server";
import db from "../../apis/connectdb/db";

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
