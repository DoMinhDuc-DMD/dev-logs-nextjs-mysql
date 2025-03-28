import { NextResponse } from "next/server";
import db from "../../apis/connectdb/db";

export async function GET() {
    try {
        const [leaderEnrolledProjects] = await db.query(`SELECT member_project.account_id, member_project.project_id from member_project
            INNER JOIN account ON account.id = member_project.account_id
            WHERE account.role = 'Leader' `)

        const [devlogs] = await db.query(`SELECT devlog.*, account.employee_work_email, project.project_name, task.task_name FROM devlog 
            INNER JOIN account ON account.id = devlog.account_id
            INNER JOIN task ON task.id = devlog.task_id
            INNER JOIN project ON project.id = devlog.project_id
            `);

        return NextResponse.json({ devlogs, leaderEnrolledProjects });
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}