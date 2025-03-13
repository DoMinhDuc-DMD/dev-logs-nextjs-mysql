import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "devlog_manage",
});

export async function GET(req) {
    try {
        const searchParams = new URL(req.url).searchParams;
        const userId = searchParams.get("userId");

        if (!userId) {
            return NextResponse.json({ message: "Thiếu userId" }, { status: 400 });
        }

        const [rows] = await db.query("SELECT * FROM account WHERE id = ?", [userId]);
        if (rows.length === 0) {
            return NextResponse.json({ message: "Không tìm thấy tài khoản" }, { status: 404 });
        }

        return NextResponse.json(rows[0]);
    } catch (error) {
        return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const { employee_code,
            employee_name,
            employee_birthday,
            employee_bank_account,
            employee_private_email,
            employee_phone_number,
            employee_citizen_identification,
            employee_work_email,
            employee_work_password,
            employee_license_plate, userId } = await req.json();
        if (!userId) {
            return NextResponse.json({ message: "Thiếu userId" }, { status: 400 });
        }
        await db.query("UPDATE account SET employee_code = ?, employee_name = ?, employee_birthday = ?, employee_bank_account = ?, employee_private_email = ?,employee_phone_number = ?,employee_citizen_identification = ?,employee_work_email = ?,employee_work_password = ?,employee_license_plate = ? WHERE id = ?",
            [employee_code,
                employee_name,
                employee_birthday,
                employee_bank_account,
                employee_private_email,
                employee_phone_number,
                employee_citizen_identification,
                employee_work_email,
                employee_work_password,
                employee_license_plate, userId])

        return NextResponse.json({ message: "Cập nhật thành công" }, { status: 200 });
    } catch (error) {
        console.error("Lỗi cập nhật tài khoản:", error);
    }
}