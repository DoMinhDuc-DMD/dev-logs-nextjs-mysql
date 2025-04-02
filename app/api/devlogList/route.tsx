import { NextResponse } from "next/server";
import db from "../connectdb/db";

export async function GET() {
  try {
    const [devlogs] = await db.query(`
            SELECT devlog.*, 
                    account.employee_work_email, 
                    account.employee_code, 
                    project.project_name, 
                    task.task_name
            FROM devlog 
            INNER JOIN account ON account.id = devlog.account_id
            INNER JOIN task ON task.id = devlog.task_id
            INNER JOIN project ON project.id = devlog.project_id
            ORDER BY devlog.id DESC
            `);

    const [leaderProjects] = await db.query(`SELECT * FROM member_project`);

    return NextResponse.json({ devlogs, leaderProjects });
  } catch (error) {
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
