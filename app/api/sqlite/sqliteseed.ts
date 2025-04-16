import { openDB } from "./sqlitedb"


async function setup(){
    const db = await openDB();
    // Account table
    await db.exec(`CREATE TABLE IF NOT EXISTS account (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        employee_name VARCHAR(100), 
        employee_code VARCHAR(100), 
        employee_work_email VARCHAR(100), 
        employee_work_password VARCHAR(100), 
        employee_private_email VARCHAR(100), 
        employee_phone_number VARCHAR(100), 
        employee_birthday DATE, 
        employee_bank_account VARCHAR(100), 
        employee_citizen_identification VARCHAR(100), 
        employee_license_plate VARCHAR(100), 
        role_id INTEGER,
        FOREIGN KEY (role_id) REFERENCES role(id)
        )`)
    await db.run(
        `INSERT INTO account (employee_name, employee_code, employee_work_email, employee_work_password, employee_private_email,employee_phone_number, employee_birthday,employee_bank_account, employee_citizen_identification, employee_license_plate, role_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,'John','admin','admin@gmail.com','1','admin@gmail.com','0','1999-05-04','0','0','0','1'
    )
    // Role table 
    await db.exec(`CREATE TABLE IF NOT EXISTS role (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        role_name VARCHAR(100)
        )`)
    await db.run(
        `INSERT INTO role (role_name) VALUES ('Admin'),('HR'),('Leader'),('Developer')`
    )
    // Project table
        await db.exec(`CREATE TABLE IF NOT EXISTS project (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            project_name VARCHAR(100),
            description VARCHAR(100),
            start_date DATE,
            end_date DATE,
            status VARCHAR(100)
            )`)
    // Task table
        await db.exec(`CREATE TABLE IF NOT EXISTS task (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            task_name VARCHAR(100),
            task_name_index INTEGER,
            project_id INTEGER,
            FOREIGN KEY (project_id) REFERENCES project(id)
            )`)

    // Member project table
        await db.exec(`CREATE TABLE IF NOT EXISTS member_project (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            account_id INTEGER,
            project_id INTEGER,
            FOREIGN KEY (account_id) REFERENCES account(id),
            FOREIGN KEY (project_id) REFERENCES project(id)
            )`)

    // Devlog table
        await db.exec(`CREATE TABLE IF NOT EXISTS devlog (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            hours INTEGER,
            overtime BOOLEAN,
            date DATE,
            note TEXT,
            account_id INTEGER,
            project_id INTEGER,
            task_id INTEGER,
            FOREIGN KEY (account_id) REFERENCES account(id),
            FOREIGN KEY (project_id) REFERENCES project(id),
            FOREIGN KEY (task_id) REFERENCES task(id)
            )`)

    // Notice devlog table
            await db.exec(`CREATE TABLE IF NOT EXISTS notice_devlog (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                leader_id INTEGER,
                employee_id INTEGER,
                project_id INTEGER,
                date DATETIME,
                notice_count INTEGER,
                FOREIGN KEY (leader_id) REFERENCES account(id),
                FOREIGN KEY (employee_id) REFERENCES account(id),
                FOREIGN KEY (project_id) REFERENCES project(id))`)

    await db.close()
}

setup().catch((err)=>{
    console.error(err)
})