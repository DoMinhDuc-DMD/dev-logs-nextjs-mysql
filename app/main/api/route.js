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
        const [devlogData] = await db.query(`SELECT SUM(hours) AS total_hours, date, account_id FROM devlog GROUP BY date, account_id`);

        return NextResponse.json(devlogData);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}