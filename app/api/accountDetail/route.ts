import { NextRequest, NextResponse } from "next/server";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const userId = Number(searchParams.get("id"));

    const account = await prisma.account.findUnique({
      where: {
        id: userId,
      },
      include: {
        role: {
          select: {
            role_name: true,
          },
        },
      },
    });

    if (!account) {
      return NextResponse.json({ message: "Không tìm thấy tài khoản" }, { status: 404 });
    }

    const response = {
      ...account,
      role: account.role?.role_name
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
