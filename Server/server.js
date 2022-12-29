const express = require("express");
const app = require("../index");
const cors = require("cors");


app.use(express.json());

app.use(cors())
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server listening on port 3000');
});

