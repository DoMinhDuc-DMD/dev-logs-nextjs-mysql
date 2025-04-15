import { NextResponse } from "next/server";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const devlogData = await prisma.devlog.groupBy({
      by: ['date','account_id'],
      _sum: {
        hours: true,
      }
    });

    const formattedData = devlogData.map((data)=>({
      account_id: data.account_id,
      date: data.date,
      total_hours: data._sum.hours
    }))

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
