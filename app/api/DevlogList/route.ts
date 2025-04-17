import { NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await openDB();
    const devlogs = await db.all(`SELECT devlog.*, account.employee_work_email, account.employee_code, 
                                  project.project_name, task.task_name FROM devlog
                                    INNER JOIN account ON account.id = devlog.account_id
                                    INNER JOIN project ON project.id = devlog.project_id
                                    INNER JOIN task ON task.id = devlog.task_id
                                    GROUP BY devlog.date, account.id, project.id, task.id
                                    ORDER BY devlog.id DESC`
                                )

    const leaderProjects = await db.all(`SELECT * FROM member_project`);

    await db.close();

    return NextResponse.json({ devlogs, leaderProjects });
  } catch (error) {
    console.error(error);
  }
}
