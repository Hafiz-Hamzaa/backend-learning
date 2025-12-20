// What is Express.js?

// Express.js ek Node.js ka framework hai jo server banana aur APIs likhna bohot easy aur fast bana deta hai.
// Node.js khud powerful hai, lekin usme server banane ke liye bohot zyada low-level kaam karna padta hai (routing, headers, parsing, status codes, etc.).
// Express.js ye saara kaam automatically handle kar leta hai aur humein simple, readable aur clean syntax deta hai.

// Express.js = Node.js ko easy, fast aur professional banane ka tool
// Express Node ke upar hi chalta hai — alag cheez nahi hai.

// Need of Express.js (Express kyun chahiye?)

// Jab tum pure Node.js se server banate ho to:
// Har route ke liye if/else likhne padte hain
// Request ka data manually parse karna padta hai
// Headers, status codes, redirects sab khud handle karne hote hain
// Code long, messy aur difficult ho jata hai

// Express.js ye problems solve karta hai:
// ✔ Routing easy ( /, /users, /products direct define )
// ✔ Request & Response handling simple
// ✔ Middleware system (auth, logging, validation easy)
// ✔ POST data automatically parse ho jata hai
// ✔ Real-world APIs banana easy
// ✔ Industry standard (companies isi ko use karti hain)
// Node.js foundation hai, Express.js building hai

// Install Express JS
// External Module
const express = require('express')

// use express and call express() in app var
const app = express()

// Adding Middlewares: maqsad ye hai kai har aik kaam apna apna middleware kre jese login ka alag middleware, api ka alag etc. yaha per ordered matter krta hai jis sequence me apne rkhe hai pehle wohi kaam krega ye hame (next) bh deta hai iska mtlb hota kai ab ap agai wale middleware kai pas chale jao

// syntax of middleware
app.use((req,res,next) => {
    console.log('Came in First Middleware',req.url,req.method)
    next()
})

app.use((req,res,next) => {
    console.log('Came in Second Middleware',req.url,req.method)
    
    // Sending Response to Client using .send() ye khud hi end krdega or setHeaders bh set krdega type kia hai response ka jese text/html
    res.send("<h1></>Welcome to Express JS ")
})

const PORT = 3000
app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`)
})