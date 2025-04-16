import { NextRequest, NextResponse } from "next/server";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.account.findFirst({
      where:{
        employee_work_email: email,
      },
      include:{
        role: true,
      },
    });

    if (!user || password !== user.employee_work_password) {
      return NextResponse.json(
        { 
          message: "Email hoặc mật khẩu không đúng!", 
          description: "Vui lòng kiểm tra lại", 
          status: 401 
        }
      );
    }

    return NextResponse.json(
      {
        message: "Đăng nhập thành công",
        description: "Đăng nhập hệ thống Devlog Manage",
        userId: user.id,
        userRole: user.role.role_name,
        status: 200
      }
    );
  } catch (error) {
    console.error("Lỗi server:", error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
