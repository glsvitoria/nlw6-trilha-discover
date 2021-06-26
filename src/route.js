const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) /* Criando a rota para a página home */
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'})) /* Criando a rota para a página create-pass */

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open) /* Criando a rota para a página room */
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
// Formato que o formulario de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route /* Exportando a rota */