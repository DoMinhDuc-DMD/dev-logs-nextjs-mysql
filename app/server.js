import "dotenv/config";
import express from "express";
import mysql from "mysql2/promise";
import session from "express-session";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(session({
    secret: "1606",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }
}));


export async function connectDB() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'devlogs',
    });
    return connection;
}

app.post("login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const db = await connectDB();
        const [users] = await db.execute("SELECT * FROM account WHERE email = ? AND password = ?", [email, password]);

        if (users.length > 0) {
            req.session.user = users[0];
            res.join({ message: "Login successfully!", user: users[0] });
        } else {
            res.status(401).json({ message: "Invalid email or password!" });
        }

        db.end();
    } catch (error) {
        res.status(500).json({ message: "Server error: ", error });
    }
});

app.get("/session", (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
    } else {
        res.json({ loggedIn: false });
    }
});

app.get("logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Logout Failed!" });
        }
        res.json({ message: "Logged out!" });
    });
});

export { app };