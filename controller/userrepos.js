const axios = require("axios");
const express = require("express");
const octokit = require("octokit");

const app = express();




const tool = new octokit.Octokit({auth: process.env.TOKEN });


//repos usuário
async function getUserRepos(username) {
    try {
      const user = await tool.request('GET /users/{username}/repos',{
        username: username
      })
      console.log(user.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  getUserRepos("contrastguy")