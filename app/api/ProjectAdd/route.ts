import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await openDB();
    const account = await db.all(`
      SELECT account.*, role.role_name as role FROM account, role WHERE role.role_name = 'Developer' AND account.role_id = role.id`
    );

    await db.close();

    return NextResponse.json(account);
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const db = await openDB();
    const { project, tasks } = await req.json();

    const existedProject = await db.get(`
      SELECT * FROM project WHERE project_name = ?`,project.project_name
    )

    if (existedProject) {
      return NextResponse.json({message: "Tên dự án đã tồn tại!", status: 400});
    }

    const projectResult = await db.run(`INSERT INTO project (project_name,description,start_date,end_date) VALUES (?,?,?,?)`,
      [project.project_name, project.description, project.start_date, project.end_date]
    )
    
    const project_id = projectResult.lastID;

    for (const task of tasks) {
      await db.run(`INSERT INTO task (task_name,project_id,task_name_index) VALUES (?,?,?)`,
        [task.task_name, project_id, task.task_name_index]
      );
    }

    for (const member of project.members) {
      await db.run('INSERT INTO member_project (account_id,project_id) VALUES (?,?)', [member, project_id])
    }

    return NextResponse.json({ message: "Thêm dự án thành công!", status: 201 });
  } catch (error) {
    console.error(error);
  }
}
