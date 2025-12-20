// --------- npm and tools

// Install Material icons theme : maqsad hmare har file ka icons dekhe achee se.

// npm init : ye package.json file create krta hai jb bh ham Node JS project banai gai ye npm init se  hi start kregai isme sb information and dependencies hoti hai hmare project ki.

// npm script: ham yaha per custom script define krker apna server start krskte hai standard sbse pehle ap "start":"node app.js"(npm start) alternative : "khul-ja-simsim":"node app.js" (npm run khul-ja-simsim)

// Installing Packages : npm install package-name
// -save: is se apka package package.json me add hojata hai.
// -save-dev: age ap chahte hai ye mera package sir development kai time use ho production per na jai.
// -g: globally install krna chahte hai.

// Install Package: npm i nodemon --save-dev -g : iska purpose ye kai jb bh ham node js me code me change krte rahe isko auto updated krte rahe hame br bar server ko wapis start ya kill krne ki zaroorat nh parti and script me jaker ab ap nodemon app.js kregai ab hame nodemon se server chlana hai

const http = require('http')
const server = http.createServer((req,res) => {
    console.log(req)
})
const PORT = 3000
server.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
})