// ----------  Routing Request Based on URL 

const http = require("http")
const server = http.createServer((req,res) => {
    if(req.url === "/"){
        console.log(req);
        res.write("Welcome to Hafi Hamza Website")
        return res.end()
    }else if(req.url === "/course"){
        res.write("Check Our Course")
        return res.end()
    }else if(req.url === "/contact"){
        console.log("Contact")
        res.write("Contact Page")
        return res.end()
    }else if(req.url === "/product/men"){
        res.write("Mens Page Collection")
        return res.end()
    }

    res.write("Like/Share/Subscribe")
    res.end()
})

const PORT = 3000
server.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`)
})