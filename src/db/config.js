const sqlite3 = require("sqlite3")
const { open } = require("sqlite") /* Forma para pegar apenas uma funcionalidade de um módulo */

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    })