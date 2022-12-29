const controller = require("../controller/controller")
const express = require("express");
const Router = express.Router();


Router.get("/", function(req, res, next) {
    res.send("Hello World") 
    res.header("Access-Control-Allow-Origin", "*")
})


Router.get ("/users/:username/repos", function(req, res){
    controller.useRepos.then((result)=>{res.send(result)
        res.header("Access-Control-Allow-Origin", "*")})
})

Router.get ("/users/:username/hovercard", function(req, res){
    controller.userDetails.then((result)=>{res.send(result)
    res.header("Access-Control-Allow-Origin", "*")})
})

Router.get ("/users", function(req, res){
    controller.userList.then((result)=>{res.send(result)
    res.header("Access-Control-Allow-Origin", "*")})
})


module.exports = Router