import { NextResponse } from "next/server";
import db from "../connectdb/db";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const devlogData = await prisma.devlog.findMany({
      orderBy: [
        {
          date: 'desc',
        },
        {
          task: {
            task_name_index: 'asc'
          }
        }
      ],
      include:{
        task: {
          select: {
            task_name_index: true,
          }
        }
      }
    });
    
    const formattedData = devlogData.map((data)=>({
      account_id: data.account_id,
      hours: data.hours,
      date: data.date,
      task_name_index: data.task.task_name_index
    }))
    
    return NextResponse.json(formattedData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
