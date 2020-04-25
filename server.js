const express = require('express')
const nunjucks = require('nunjucks') //template engine
const routes = require('./routes') //rotas do sistema

const server = express()

/** usar arquivos estáticos */
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

/**  */
server.listen(5000, function () {
  console.log("server running")
})