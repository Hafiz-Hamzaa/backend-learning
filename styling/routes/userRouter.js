const express = require('express')

// Core Module
const path = require('path')
const userRouter = express.Router()

// Middleware of Home Page
userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../' , 'views' , 'home.html'))
});

module.exports = userRouter