import mysql from "mysql2/promise";

export const dynamic = "force-dynamic";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "devlog_manage",
});

export default db;
