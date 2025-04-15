import { NextRequest, NextResponse } from "next/server";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {

    const accounts = await prisma.account.findMany({
      where: {
        role: {
          role_name: "Developer",
        }
      },
      include: {
        role: {
          select: {
            role_name: true,
          },
        }
      }
    });

    const accountData = accounts.map((account) => ({
      ...account,
      role: account.role?.role_name,
    }))

    return NextResponse.json(accountData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { project, tasks } = await req.json();

    const projectResult = await prisma.project.create({
      data: {
        project_name: project.project_name,
        description: project.description,
        start_date: new Date(project.start_date),
        end_date: new Date(project.end_date)
      }
    })
    
    const project_id = projectResult.id;
    
    for (const task of tasks) {
      await prisma.task.create({
        data: {
          task_name: task.task_name,
          project_id: project_id,
          task_name_index: task.task_name_index
        }
      })
    }

    for (const member of project.members) {
      await prisma.member_project.create({
        data: {
          account_id: member,
          project_id: project_id
        }
      })
    }

    return NextResponse.json({ message: "Thêm dự án thành công" }, { status: 200 });
  } catch (error) {
    console.error("Lỗi khi lưu dữ liệu:", error);
    return NextResponse.json({ message: "Lỗi server khi lưu dữ liệu" }, { status: 500 });
  }
}
