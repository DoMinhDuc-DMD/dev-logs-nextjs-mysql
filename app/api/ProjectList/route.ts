import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";
import { openDB } from "../sqlite/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = await openDB();
    const projects = await db.all(`SELECT * FROM project`);
    const tasks = await db.all(`SELECT * FROM task`);

    const members = await db.all(`SELECT mp.account_id, mp.project_id, a.employee_name, a.employee_work_email, d.date AS devlog_date
                                  FROM member_project mp
                                  INNER JOIN account a ON mp.account_id = a.id
                                  LEFT JOIN (
                                      SELECT account_id, project_id, date
                                      FROM devlog
                                      GROUP BY account_id, project_id
                                  ) d ON d.account_id = mp.account_id AND d.project_id = mp.project_id`);

    await db.close();
    return NextResponse.json({ projects, tasks, members }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const db = await openDB();
    const { action, updatedTasks, newProjectTasks, userId, accountId, projectId, date } = await req.json();

    if (action === "updateTasks") {
      for (const task of updatedTasks) {
        await db.run(`UPDATE task SET task_name = ?, task_name_index = ? WHERE id = ?`, 
          [task.task_name, task.task_name_index, task.id]);
      }
      for (const task of newProjectTasks) {
        await db.run(`INSERT INTO task (task_name, project_id, task_name_index) VALUES (?, ?, ?)`, 
          [task.task_name, task.project_id, task.task_name_index,]);
      }

      return NextResponse.json({ message: "Cập nhật thành công!", status: 201 });
    } else if (action === "noticeDevlog") {
      const startOfDay = dayjs(date).startOf("day").format("YYYY-MM-DD HH:mm:ss");
      const endOfDay = dayjs(date).endOf("day").format("YYYY-MM-DD HH:mm:ss");

      const existedNotice = await db.get(`
        SELECT * FROM notice_devlog WHERE leader_id = ? AND employee_id = ? AND project_id = ? AND date >= ? AND date <= ?`, 
        [userId, accountId, projectId, startOfDay, endOfDay]
      );

      if (existedNotice) {
        await db.run(`UPDATE notice_devlog SET notice_count = notice_count + 1, date = ? WHERE id = ?`, [date, existedNotice.id]);
      } else {
        await db.run(`INSERT INTO notice_devlog (leader_id, employee_id, project_id, date, notice_count) VALUES (?,?,?,?,?)`, 
          [userId, accountId, projectId, date, 1]);
      }

      await db.close();

      return NextResponse.json({ message: "Đã thông báo" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Hành động không hợp lệ!" }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
  }
}
