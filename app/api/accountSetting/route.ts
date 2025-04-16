import { NextRequest, NextResponse } from "next/server";
import prisma from "../connectprisma/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const account = await prisma.account.findMany({
      include:{
        role: {
          select:{
            role_name: true,
          }
        }
      }
    })

    const formattedAccount = account.map((acc) => ({
      ...acc,
      role: acc.role?.role_name
    }));

    return NextResponse.json({account: formattedAccount});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const {
      employee_name,
      employee_work_email,
      employee_work_password,
      employee_private_email,
      employee_phone_number,
      employee_birthday,
      employee_bank_account,
      employee_citizen_identification,
      employee_license_plate,
      userId,
    } = await req.json();
    
    if (!userId) {
      return NextResponse.json({ message: "Thiếu userId" }, { status: 400 });
    }

    await prisma.account.update({
      where: {
        id: Number(userId),
      },
      data: {
        employee_name: employee_name,
        employee_birthday: new Date(employee_birthday),
        employee_bank_account: employee_bank_account,
        employee_private_email: employee_private_email,
        employee_phone_number: employee_phone_number,
        employee_citizen_identification:employee_citizen_identification,
        employee_work_email: employee_work_email,
        employee_work_password: employee_work_password,
        employee_license_plate: employee_license_plate,
      }
    })

    return NextResponse.json({ message: "Cập nhật thành công!" }, { status: 200 });
  } catch (error) {
    console.error("Lỗi cập nhật tài khoản:", error);
  }
}
