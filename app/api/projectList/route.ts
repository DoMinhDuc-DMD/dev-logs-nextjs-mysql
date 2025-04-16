import { NextRequest, NextResponse } from "next/server";
import dayjs from "dayjs";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const projects = await prisma.project.findMany();
    const tasks = await prisma.task.findMany();

    const memberProjects = await prisma.member_project.findMany({
      select:{
        account_id: true,
        project_id: true,
        account:{
          select:{
            employee_name: true,
            employee_work_email: true,
          }
        }
      }
    });

    const devlogs = await prisma.devlog.findMany({
      orderBy:{
        date: 'desc'
      },
      distinct: ['account_id','project_id','date'],
      select:{
        account_id: true,
        project_id: true,
        date: true,
      },
    });

    const members = memberProjects.map((mp)=>{
      const matchedDevlog = devlogs.find((d) => d.account_id === mp.account_id && d.project_id === mp.project_id)

      return{
        account_id: mp.account_id,
        project_id: mp.project_id,
        employee_name: mp.account.employee_name,
        employee_work_email: mp.account.employee_work_email,
        devlog_date: matchedDevlog?.date || null
      }
    });

    return NextResponse.json({ projects, tasks, members, devlogs }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { action, updatedTasks, newProjectTasks, userId, accountId, projectId, date } = await req.json();

    if (action === "updateTasks") {
      for (const task of updatedTasks) {
        await prisma.task.update({
          where: {
            id: task.id,
          },
          data:{
            task_name: task.task_name,
            task_name_index: task.task_name_index
          }
        });
      }
      for (const task of newProjectTasks) {
        await prisma.task.create({
          data: {
            task_name: task.task_name,
            project_id: task.project_id,
            task_name_index: task.task_name_index
          }
        });
      }

      return NextResponse.json({ message: "Cập nhật thành công!", status: 201 });
    } else if (action === "noticeDevlog") {
      const startOfDay = dayjs(date).startOf("day").format("YYYY-MM-DD HH:mm:ss");
      const endOfDay = dayjs(date).endOf("day").format("YYYY-MM-DD HH:mm:ss");

      const existedNotice = await prisma.notice_devlog.findFirst({
        where: {
          leader_id: Number(userId),
          employee_id: accountId,
          project_id: projectId,
          date: {
            gte: new Date(startOfDay),
            lte: new Date(endOfDay)
          }
        }
      })

      if (existedNotice) {
        await prisma.notice_devlog.update({
          where: {
            id: existedNotice.id,
            leader_id: Number(userId),
            employee_id: accountId,
            project_id: projectId,
          },
          data: {
            notice_count: {
              increment: 1,
            },
            date: new Date(date),
          },
        })
      } else {
        await prisma.notice_devlog.create({
          data:{
            leader_id: Number(userId),
            employee_id: accountId,
            project_id: projectId,
            date: new Date(date),
            notice_count: 1
          }
        })
      }

      return NextResponse.json({ message: "Thông báo đã gửi" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Hành động không hợp lệ!" }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
  }
}
