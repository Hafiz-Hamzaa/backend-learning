// Express JS in Routing : Routing ham Path or method kai basis per krkste hai dono

const express = require('express')
const app = express()

// order matters
// cannot call next() after send
// / for evrything
// res.send() means your response has been end 

// Routing according to Path
app.use("/", (req,res,next) => {
    console.log('Came in First Middleware')
    // res.send('<h1>Welcome to Backend Devlopment Course</h1>');
    next()
})

app.use("/" ,(req,res,next) => {
    console.log('Came in Second Middleware')
    // res.send('<h1>Backend Devlopment Course</h1>');
    next()
})

app.use("/submit-details" , (req,res,next) => {
    console.log('Came in Third Middleware')
    res.send('<h1>Submit Details Page</h1>');
})


const PORT = 3000
app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
})