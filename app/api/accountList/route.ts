import { NextRequest, NextResponse } from "next/server";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const account = await prisma.account.findMany({
      where:{
        role: {
          role_name: {
            not: 'Admin'
          }
        }
      },
      include:{
        role: {
          select:{
            role_name: true,
          }
        }
      }
    })

    const formattedAccount = account.map((acc)=>({
      ...acc,
      role: acc.role.role_name
    }))

    const role = await prisma.role.findMany({
      where: {
        role_name: {
          not: 'Admin'
        }
      }
    });

    const formattedRole = role.map((row) => ({ value: row.role_name, label: row.role_name }));

    return NextResponse.json({ account: formattedAccount, role: formattedRole });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, email, password, role } = await req.json();

    const rows = await prisma.role.findFirst({
      where: {
        role_name: role,
      },
      select:{
        id: true
      }
    });

    const role_id = rows?.id;
    
    await prisma.account.update({
      where:{
        id: Number(id),
      },
      data:{
        employee_work_email: email,
        employee_work_password: password,
        role_id: role_id
      }
    })

    return NextResponse.json({ message: "Cập nhật thành công!", status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
