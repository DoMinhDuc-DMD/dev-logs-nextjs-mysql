import { NextRequest, NextResponse } from "next/server";
import db from "../connectdb/db";
import { ResultSetHeader } from "mysql2";

export async function GET() {
  try {
    const [accounts] = await db.query("SELECT id, employee_name FROM account WHERE role = 'Developer'");

    return NextResponse.json(accounts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { project, tasks } = await req.json();

    const [projectResult] = await db.query<ResultSetHeader>(
      "INSERT INTO project (project_name,description,start_date,end_date) VALUES (?,?,?,?)",
      [project.project_name, project.description, project.start_date, project.end_date]
    );

    const project_id = projectResult.insertId;
    for (const task of tasks) {
      await db.query("INSERT INTO task (task_name,project_id,task_name_index) VALUES (?,?,?)", [
        task.task_name,
        project_id,
        task.task_name_index,
      ]);
    }

    for (const member of project.members) {
      await db.query("INSERT INTO member_project (account_id,project_id) VALUES (?,?)", [member, project_id]);
    }

    return NextResponse.json({ message: "Thêm dự án thành công" }, { status: 200 });
  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu:", error);
    return NextResponse.json({ message: "Lỗi server khi lưu dữ liệu" }, { status: 500 });
  }
}
