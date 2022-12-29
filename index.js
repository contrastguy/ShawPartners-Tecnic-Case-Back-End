const express = require("express");
const app = express()
const cors = require("cors");


app.use(express.json());

app.use(cors({origin: "http://localhost:3000/"}))
//importar as rotas do routes.js
const usuario = require("./router/routes")

//definir a rota padrão com express
app.use("/" ,  usuario) // o /usuario é o a rota que você escreve depois do número da porta quando for chamar a API no Postman

module.exports= app
//OBS: endereço para chamar a API no Postman -> http://localhost:~número porta~/~nome da rota padrão~/