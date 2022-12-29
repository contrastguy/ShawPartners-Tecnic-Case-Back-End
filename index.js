const express = require("express");
const app = express()

app.use(express.json());

//importar as rotas do routes.js
const usuario = require("./router/routes")

//definir a rota padrão com express
app.use("/" ,  usuario) // o /usuario é o a rota que você escreve depois do número da porta quando for chamar a API no Postman


module.exports= app
//OBS: endereço para chamar a API no Postman -> http://localhost:~número porta~/~nome da rota padrão~/