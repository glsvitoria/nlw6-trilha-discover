const express = require('express') /* Trazendo o express para o servidor */
const route = require('./route') /* Trazendo o arquivo com a rota */
const path = require('path') /* Caminho do windows até chegar na pasta nlw-discover */

const server = express() /* Criando o um server e ligando ao express */

server.set('view engine', 'ejs')

server.use(express.static("public")) /* Falando para o server usar a pata public que ficará guardado os arquivos front-end */

server.set('views', path.join(__dirname, 'views')) /* Levando o server até a pasta views .../nlw-discover(path)/src(__dirname)/views */

server.use(express.urlencoded({extended: true}))

server.use(route) /* Falando para o server usar a rota criada*/

server.listen(3000, () => console.log("RODANDO")) /* Criando uma porta para o servidor e dando uma função a ele */

