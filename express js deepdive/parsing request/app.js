// -------- Parsing Request

const express = require('express')
const bodyPasrer = require('body-parser')
const app = express()


// -------- Add Two Dummy Middleware
app.use((req,res,next) => {
    console.log('First Middleware' , req.url , req.method);
    next()
})

app.use((req,res,next) => {
    console.log('Second Middleware' , req.url , req.method);
    next()
})

// Add Thirs Middleware with some response
// app.use((req,res,next) => {
//     console.log('Third Middleware' , req.url , req.method);
//     res.send('<h1>Welcome Hafiz Hamza Middleware</h1>')
// })

// Add Handling two more middleware for / and a rqeuest /conatct-us page also
app.get("/", (req,res,next) => {
    console.log('Handling / for Get' , req.url,req.method);
    res.send('<h1>Welcome to Hafiz Hamza Website.....</h1>')
})

app.get("/contact-us", (req,res,next) => {
    console.log('Handling /contact-us for Get' , req.url,req.method);
    res.send(`<h1>Please Enter your Details Here....</h1>
            <form action="/contact-us" method="POST">
        <input type="text" placeholder="Enter your email" name="name">
        <input type="text" placeholder="Enter your email" name="email">
        <input type="submit">
    </form>`)
} )


// add middleware of body-parser
app.use(bodyPasrer.urlencoded())
// ----------------------

app.post("/contact-us", (req,res,next) => {
    console.log('Handling /contact-us for POST' , req.url,req.method);
    res.send("<h1>Form Submit Successfully.......</h1>")
    console.log(req.body)
})


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})