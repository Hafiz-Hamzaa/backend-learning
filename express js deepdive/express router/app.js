// What we learn in this topic :
// 1- Express Router ka use krkai seprate Routes banai jese userRouter and hostRouter
// 2- Common Path : yaha hamen (/host) define krdia middleware ne kai starting point yah se hoga
// 3- 404 and set staus code also
// 4- Adding Html Files separates in views folder
// 5- then Serve HTML Files using core module path with join method

// External Module
const express = require("express");
const path = require("path");

// Local Modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

// making a serever
const app = express();

// parsing request
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter); // ap common path attach krkste ho kai /host to sbme hi hoga usse hi start hoga

// Handling 404 - Page Not Found so adding middleware of this
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// listening a server
const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`Server running at http://localhost:${PORT}`);
});
