import { connectDB } from "../../db";

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return new Response(JSON.stringify({ message: 'Fill in email and password' }), { status: 400 });
        }

        const db = await connectDB();
        const [rows] = await db.execute('SELECT * FROM account WHERE email = ? ', [email]);

        if ([rows].length === 0) {
            return new Response(JSON.stringify({ message: "Can't found account!" }), { status: 404 });
        }

        if (password !== rows[0].password) {
            return new Response(JSON.stringify({ message: "Wrong password!" }), { status: 401 });
        }

        return new Response(JSON.stringify({ message: "Login completed!", user: rows[0] }), { status: 200 });
    }
    catch (error) {
        console.log('API error: ', error);
        return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
    }
}