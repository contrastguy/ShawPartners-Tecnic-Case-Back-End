const axios = require("axios").default();
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
async function getUserDetails(){
    try {
      const user = await axios.get(`https://api.github.com/users/${localStorage.getItem("LOGIN")}`);
      return user.data;
    } catch (error) {
      console.error(error);
    }
  }





  async function getUseRepos(){
    try {
      const user = await tool.request('GET /users/{username}/repos',{
        username: localStorage.getItem("LOGIN")
      })
      return user.data;
    } catch (error) {
      console.error(error);
    }
  }
  
 


  async function getUsersList() {
    try {
      const list = await tool.request('GET /users', {since:1,per_page:20})
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