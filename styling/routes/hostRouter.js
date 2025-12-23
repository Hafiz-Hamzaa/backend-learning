const express = require("express");
const path = require('path')
const hostRouter = express.Router();

// Middleware o add-home handler
hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
});

// Middleware of POST Handler
hostRouter.post("/add-home", (req, res, next) => {
 res.sendFile(path.join(__dirname, '../' , 'views' , 'success.html'))
  console.log(req.body);
});

module.exports = hostRouter;
