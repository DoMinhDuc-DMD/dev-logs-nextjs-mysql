import { NextRequest, NextResponse } from "next/server";
import db from "../connectdb/db";
import { RowDataPacket } from "mysql2";

export async function GET() {
  try {
    const [projects] = await db.query("SELECT * FROM project");
    const [tasks] = await db.query("SELECT * FROM task");
    const [members] = await db.query(`SELECT mp.account_id, mp.project_id, a.employee_name, a.employee_work_email, d.date AS devlog_date
                                        FROM member_project mp
                                        INNER JOIN account a ON mp.account_id = a.id
                                        LEFT JOIN (
                                            SELECT account_id, project_id, date
                                            FROM devlog
                                            GROUP BY account_id, project_id
                                        ) d ON d.account_id = mp.account_id AND d.project_id = mp.project_id;`);

    return NextResponse.json({ projects, tasks, members }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, updatedTasks, newProjectTasks, userId, accountId, projectId, date } = body;

    if (action === "updateTasks") {
      for (const task of updatedTasks) {
        await db.query("UPDATE task SET task_name = ?, task_name_index = ? WHERE id = ?", [task.task_name, task.task_name_index, task.id]);
      }
      for (const task of newProjectTasks) {
        await db.query("INSERT INTO task (task_name, project_id, task_name_index) VALUES (?, ?, ?)", [
          task.task_name,
          task.project_id,
          task.task_name_index,
        ]);
      }

      return NextResponse.json({ message: "Cập nhật thành công" }, { status: 200 });
    } else if (action === "noticeDevlog") {
      const [existedNotice] = await db.query<RowDataPacket[]>(
        `SELECT * FROM notice_devlog WHERE leader_id = ? AND employee_id = ? AND project_id = ?`,
        [userId, accountId, projectId]
      );

      if (existedNotice.length > 0) {
        await db.query(
          `UPDATE notice_devlog SET notice_count = notice_count + 1, date = ? WHERE leader_id = ? AND employee_id = ? AND project_id = ?`,
          [date, userId, accountId, projectId]
        );
      } else {
        await db.query(`INSERT INTO notice_devlog (leader_id, employee_id, project_id, date, notice_count) VALUES (?,?,?,?,?)`, [
          userId,
          accountId,
          projectId,
          date,
          1,
        ]);
      }

      return NextResponse.json({ message: "Thông báo đã gửi" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Hành động không hợp lệ!" }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
