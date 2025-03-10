import jwt from "jsonwebtoken";
const secret_key = "1606";

export default async function authenticate(req) {
    try {
        const authHeader = req.headers.get("Authorization");
        if (!authHeader) {
            return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, secret_key);

        return new Response(JSON.stringify({ message: "Access granted", user: decoded }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ message: "Invalid token" }), { status: 401 });
    }
}