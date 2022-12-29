const express = require("express");
const app = express()
const cors = require("cors");
const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  }


app.use(express.json());

app.use(cors(corsOptions))
//importar as rotas do routes.js
const usuario = require("./router/routes")

//definir a rota padrão com express
app.use("/" ,  usuario , (req,res)=>{
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
}) // o /usuario é o a rota que você escreve depois do número da porta quando for chamar a API no Postman

module.exports= app
//OBS: endereço para chamar a API no Postman -> http://localhost:~número porta~/~nome da rota padrão~/