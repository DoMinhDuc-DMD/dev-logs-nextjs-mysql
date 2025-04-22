import { NextResponse } from "next/server";
import { openDB } from "../sqlite/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await openDB();

    const account = await db.all(`
      SELECT account.id, account.employee_code, account.employee_work_email, account.employee_name, account.role_id, role.role_name AS role FROM account
      INNER JOIN role ON account.role_id = role.id
      WHERE role.role_name != 'Admin' AND role.role_name != 'HR'
      ORDER BY role_id ASC`
    );
    const accountDevlog =  await db.all(`
      SELECT devlog.*, account.employee_name, account.employee_work_email, account.employee_code, project.project_name, task.task_name FROM devlog 
      INNER JOIN account ON account.id = devlog.account_id
      INNER JOIN project ON project.id = devlog.project_id 
      INNER JOIN task ON task.id = devlog.task_id
      ORDER BY devlog.date DESC`
    );

    await db.close();

    return NextResponse.json({ account, accountDevlog });
  } catch (error) {
    console.error(error);
  }
}
