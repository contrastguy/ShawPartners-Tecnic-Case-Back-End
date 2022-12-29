const axios = require("axios");
const express = require("express");
const octokit = require("octokit");

const app = express();


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

return userList;
