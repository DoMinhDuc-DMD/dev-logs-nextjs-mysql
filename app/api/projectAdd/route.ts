import { NextRequest, NextResponse } from "next/server";
import { openDB } from "../sqlite/sqlitedb";

export async function GET() {
  try {
    const db = await openDB();
    const accounts = await db.all(`SELECT account.id, account.employee_name, role.role_name FROM account, role WHERE role.role_name = 'Developer' AND account.role_id = role.id`);

    await db.close();

    return NextResponse.json(accounts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const db = await openDB();
    const { project, tasks } = await req.json();

    const projectResult = await db.run(
      "INSERT INTO project (project_name,description,start_date,end_date) VALUES (?,?,?,?)",
      [project.project_name, project.description, project.start_date, project.end_date]
    );

    const project_id = projectResult.lastID;
    for (const task of tasks) {
      await db.run("INSERT INTO task (task_name,project_id,task_name_index) VALUES (?,?,?)", [
        task.task_name,
        project_id,
        task.task_name_index,
      ]);
    }

    for (const member of project.members) {
      await db.run("INSERT INTO member_project (account_id,project_id) VALUES (?,?)", [member, project_id]);
    }

    await db.close();

    return NextResponse.json({ message: "Thêm dự án thành công" }, { status: 200 });
  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu:", error);
    return NextResponse.json({ message: "Lỗi server khi lưu dữ liệu" }, { status: 500 });
  }
}
