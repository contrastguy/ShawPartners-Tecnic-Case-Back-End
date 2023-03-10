const axios = require("axios");
const express = require("express");
const octokit = require("octokit");
require('dotenv').config()


const app = express();



//default route
const home = app.get("/" ,(req,res)=>{
  res.send({Message:"Hello World"});
});

const tool = new octokit.Octokit({auth: process.env.TOKEN });

//detalhes usuário
async function getUserDetails(req, res){
    try {
      // const user = await tool.request('GET /users/{username}',{
      //   username:"contrastguy"
      // })
      const {name} = req.params;

      await axios.get("https://api.github.com/users/" + name )
      .then(function(response){
        response.send(response.data);
      }) 
    } catch (error) {
      console.error(error);
    }
  }





  async function getUseRepos(){
    try {
      const user = await tool.paginate('GET /users/{username}/repos',{
        username: "contrastguy"
      })
      return user.data;
    } catch (error) {
      console.error(error);
    }
  }
  
 


  async function getUsersList() {
    try {
      const list = await tool.request('GET /users', {since:1,per_page:50})
      return list.data
  }catch (error){
    console.error(error);
  }

  }

  const userList  = getUsersList()

  const useRepos =  getUseRepos()


  const userDetails = getUserDetails()


  
 
  module.exports = {
    userList,
    useRepos,
    userDetails,
    home
  }