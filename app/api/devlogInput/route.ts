import { NextRequest, NextResponse } from "next/server";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";


export async function GET() {
  try {
    const projectData = await prisma.project.findMany({
      include: {
        member_project: {
          select: {
            account_id: true, 
          }
        }
      }
    });

    const taskData = await prisma.task.findMany();

    const formattedProject = projectData.map((row) => ({
      value: row.id,
      label: row.project_name,
      accountId: row.member_project.map(member => member.account_id),
    }));

    const formattedTask = taskData.map((row) => ({
      value: row.id,
      label: row.task_name,
      projectId: row.project_id,
    }));

    return NextResponse.json({ formattedProject, formattedTask });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
export async function POST(req: NextRequest) {
  try {
    const { userId, hours, overtime, date, note, project, task } = await req.json();

    if (!project || !task || !hours || !date) {
      return NextResponse.json({ message: "Vui lòng nhập đầy đủ thông tin" }, { status: 400 });
    }

    await prisma.devlog.create({
      data:{
        hours: hours,
        overtime: overtime,
        date: new Date(date),
        note: note,
        account_id: Number(userId),
        project_id: project,
        task_id: task
      }
    })

    return NextResponse.json({ message: "Thêm devlog thành công!" });
  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu:", error);
    return NextResponse.json({ message: "Lỗi server khi lưu dữ liệu" }, { status: 500 });
  }
}
