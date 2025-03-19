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
        const [devlogData] = await db.query(`SELECT devlog.hours, devlog.date, devlog_project.account_id, task.task_name_index 
            FROM devlog 
            JOIN devlog_project ON devlog.id = devlog_project.devlog_id 
            JOIN task ON task.id = devlog_project.task_id`);

        return NextResponse.json(devlogData);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}