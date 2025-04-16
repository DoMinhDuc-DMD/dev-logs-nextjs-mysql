import { NextRequest, NextResponse } from "next/server";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
      const roles = await prisma.role.findMany({
        where: {
          role_name: {
            not: "Admin"
          }
        }
      });

      const formattedRoles = roles.map((row) => ({
          value: row.role_name,
          label: row.role_name,
      }));
  
      return NextResponse.json({ roles: formattedRoles });
    } 
    catch (error) {
        console.error("Lỗi lấy danh sách role: ", error);
    }
}

export async function POST(req: NextRequest) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return NextResponse.json({ message: "Vui lòng nhập đầy đủ thông tin", status: 400 });
    }

    const existingUser = await prisma.account.findFirst({
      where:{
        employee_work_email: email,
      },
    }
    );

    if (existingUser) {
      return NextResponse.json({ message: "Email đã tồn tại", status: 400 });
    }

    const roleRows = await prisma.role.findFirst(
      {
        where:{
          role_name: role,
        },
      }
    );

    if (!roleRows) {
      return NextResponse.json({ message: "Role không hợp lệ", status: 400 });
    }

    const role_id = roleRows.id;

    await prisma.account.create({
      data: 
        {
          employee_work_email: email,
          employee_work_password: password,
          role_id: role_id,
        },
    });

    return NextResponse.json({ message: "Đăng ký thành công", status: 201 });
  } catch (error) {
    console.error("Lỗi server khi đăng ký:", error);
  }
}
