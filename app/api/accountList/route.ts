import { NextRequest, NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";
import db from "../connectdb/db";
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

    const [rows] = await db.query<RowDataPacket[]>("SELECT id FROM role WHERE role_name = ?", [role]);
    const role_id = rows[0]?.id;
    

    await db.query(`UPDATE account SET employee_work_email = ?, employee_work_password = ?, role_id = ? WHERE id = ?`, 
      [email,password,role_id,id]
    );

    return NextResponse.json({ message: "Cập nhật thành công" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
