const axios = require("axios");
const express = require("express");
const octokit = require("octokit");

const app = express();


const tool = new octokit.Octokit({auth: process.env.TOKEN });

//detalhes usuário
async function getUserDetails(username) {
    try {
      const user = await tool.request('GET /users/{username}/hovercard{?subject_type,subject_id}',{
        username: username
      })
      console.log(user.data);
    } catch (error) {
      console.error(error);
    }
  }

  getUserDetails("contrastguy")