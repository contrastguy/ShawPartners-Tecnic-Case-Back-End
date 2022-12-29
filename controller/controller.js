const axios = require("axios");
const express = require("express");
const octokit = require("octokit");

const app = express();



//default route
const home = app.get("/" ,(req,res)=>{
  res.send({Message:"Hello World"});
});

const tool = new octokit.Octokit({auth: process.env.TOKEN });

//detalhes usuário
const userDetails = async function getUserDetails(username) {
    try {
      const user = await tool.request('GET /users/{username}/hovercard{?subject_type,subject_id}',{
        username: username
      })
      console.log(user.data);
    } catch (error) {
      console.error(error);
    }
  }





const  useRepos  = async function getUserRepos(username) {
    try {
      const user = await tool.request('GET /users/{username}/repos',{
        username: username
      })
      console.log(user.data);
    } catch (error) {
      console.error(error);
    }
  }
  
 


  const userList = app.get("/api/users", (req, res) => {
    const since = req.query.since || 0;
  
    axios
      .get(`https://api.github.com/users?since=${since}`)
      .then((response) => {
        const users = response.data;
        const nextPageLink = response.headers.link;
  
        res.json({ users, nextPageLink });
      })
      .catch((error) => {
        console.error(error);
        res.status(500);
      });
  });

  module.exports = {
    userList,
    useRepos,
    userDetails,
    home
  }