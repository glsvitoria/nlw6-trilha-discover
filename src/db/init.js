const Database = require("./config")

const initDb = {
    async init(){ /* Se a função usa await ela precisa ser async, um não pode existir sem o outro */
        const db = await Database() /* Usamos o await para que antes dele ir para a próxima linha, ele espere o resultado dessa */

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`)

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`)

        await db.close()
    }
}

initDb.init()