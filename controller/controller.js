const axios = require("axios");
const express = require("express");
const octokit = require("octokit");

const app = express();




const home = app.get("/" ,(req,res)=>{
  res.send({Message:"Hello World"});
});


//users list with parameter
// Essa endpoint vai funcionar, porque não precisa de autenticação

const usersList = app.get("/api/users", (req, res) => {
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




// Normalmente, enviamos um erro 404 quando o cliente não está autenticado corretamente.
// No entanto, como não queremos fornecer nenhuma informação sobre os repositórios privados, a API retorna um erro 404.
// Octokit
