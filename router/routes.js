const controller = require("../controller/controller")
const express = require("express");
const Router = express.Router();


Router.get("/", controller.home)


Router.get ("/api/users/:username/repos", controller.useRepos)

Router.get ("/api/users/:username/details", controller.userDetails)

Router.get ("/api/users?since={number}", controller.userList)


module.exports = Router