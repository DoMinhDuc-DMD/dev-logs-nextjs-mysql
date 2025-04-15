import { NextResponse } from "next/server";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const devlogs = await prisma.devlog.findMany({
      orderBy: [
        {
          id: 'desc'
        }
      ],
      include: {
        account: {
          select: {
            employee_work_email: true,
            employee_code: true,
          }
        },
        project:{
          select: {
            project_name: true,
          }
        },
        task: {
          select: {
            task_name: true
          }
        }
      }
    })

    const devlogData = devlogs.map((data) => ({
      id: data.id,
      hours: data.hours,
      overtime: data.overtime,
      date: new Date(data.date),
      note: data.note,
      account_id: data.account_id,
      employee_code: data.account.employee_code,
      employee_work_email: data.account.employee_work_email,
      project_id: data.project_id,
      project_name: data.project.project_name,
      task_id: data.task_id,
      task_name: data.task.task_name
    }))

    const leaderProjects = await prisma.member_project.findMany();

    return NextResponse.json({ devlogData, leaderProjects });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
