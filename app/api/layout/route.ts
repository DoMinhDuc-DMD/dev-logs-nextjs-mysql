import { NextResponse } from "next/server";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const accounts = await prisma.account.findMany({
      select:{
        id:true,
        employee_name:true,
      }
    });
    const notices = await prisma.notice_devlog.findMany({
      orderBy: [
        {
          date: 'desc'
        }
      ],
      include: {
        project: {
          select: {
            project_name: true,
          }
        }
      }
    });

    const noticeData = notices.map((notice) => ({
      id: notice.id,
      project_name: notice.project.project_name,
      date: notice.date,
      employee_id: notice.employee_id,
      leader_id: notice.leader_id,
      project_id: notice.project_id,
      notice_count: notice.notice_count 
    }))

    return NextResponse.json({accounts, noticeData}, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
