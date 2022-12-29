const axios = require("axios");
const express = require("express");
const octokit = require("octokit");

const app = express();



//default route
const home = app.get("/" ,(req,res)=>{
  res.send({Message:"Hello World"});
});

return home