// Understanding Request Object :

// const http = require('http')
// const server = http.createServer((req,res) => {
//     console.log(req.url,req.method,req.headers)
//     // url:kis path per aya client
//     // method:kia actiona hai (GET,POST etc)
//     // headers:browser extra info bhejta hai server ko
// })
// const PORT = 3000
// server.listen(PORT,() => {
//     console.log(`Server running at http://localhost:${PORT}`)
// })


// Request and Response Cycle
const http = require('http')
const myServer = http.createServer((req,res) => {
    console.log(req) // request
    res.write("<html>") // response
    res.write("<head><title>Node JS Server</title></head>")
    res.write("<body><h1>Welcome to my First Node JS Server</h1></body>")
    res.write("</html>")
    res.end() // response completed
})

const PORT = 3000
myServer.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
})