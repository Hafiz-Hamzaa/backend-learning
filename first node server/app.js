// Prerequist : JS is required for Node JS
// React is recommended for Node JS not compulsory . If you want to become a Full Stack Devloper so you need to know the React JS.

// What is Node.js?
// Node.js aik JavaScript runtime environment hai jo humein browser ke baghair JavaScript run karne deta hai.Pehle JavaScript sirf client-side (browser) par chalti thi. Browser ke andar V8 engine (Chrome ka) hota hai jo JavaScript code ko execute karta hai.
// Node.js ne kia kiya?
// Node.js walon ne:
// Chrome ka V8 JavaScript engine liya - V8 engine is wriiten on C++ Code.
// Usme backend-related features add kiye (file system, server, networking, etc.)
// Aur is tarah Node.js bana diya

// Formula:V8 Engine + Backend APIs/Featurs = Node.js

// Node.js me 70–80% JavaScript hi hoti hai, bas environment different hota hai.
// Full Stack JavaScript : Client Side (Browser me — React, Vanilla JS) - Server Side (Node.js)

// Node JS VS Browser Difference
// Node Core Modules = Node.js ke built-in modules jo common tasks ke liye ready hote hain, npm install ki zarurat nahi hoti.

// Node JS Features :
// Event Loop : async kaam ko handle krta hai
// Non-Blocking I/O : Node.js me file read, DB call, API request rukawat paida nahi karti — baqi code chalti rehti hai.
// WebSocket : WebSocket browser aur server ke beech permanent connection banata hai mtb connection open rehta hai aisa smjo call kri dost ko or tum dono baat krte rehte ho jb tak call na disconnect krdo.
// 1- Server khud message bhej sakta hai
// 2- Client ko baar baar request nahi bhejni parti.

// File System Access = CRUD Operation:
// Node.js browser nahi hai, is liye ye computer ki files ko access kar sakta hai.
// Browser me JS chlti thi isliye File read/write allowed nahi (security)

// Node.js me JS me ap CRUD krkste hai:
// File banana
// File read karna
// File update / delete karna
// Ye sab File System (fs module) se hota hai.

// Modules:
// require("os") se hum apna code multiple files me divide aur reuse karte hain.

// Not Available in Node.js : Node JS does not provide browser-specific APIs like DOM, localStorage, or window because it runs on the server, not inside the browser.

// JavaScript on Client (Browser):
// Client-side JavaScript wo hoti hai jo user ke browser ke andar chalti hai, jaise Chrome ya Firefox. Iska main kaam user interface aur interaction handle karna hota hai. Jab user button click karta hai, form fill karta hai, ya page par koi change hota hai (show/hide, color change, validation), ye sab client-side JS karti hai. Is environment me JavaScript ko DOM (document), window object, localStorage / sessionStorage, aur fetch() jaise Web APIs milti hain, jinke through wo HTML aur CSS ko directly control kar sakti hai. Client-side JS ka focus hamesha fast UI response aur better user experience hota hai, lekin security reasons ki wajah se isay files, database, ya system-level access nahi diya jata.

// JavaScript on Server (Node.js):
// Server-side JavaScript wo hoti hai jo browser ke bahar, yani Node.js runtime me server par chalti hai. Iska kaam user ko UI dikhana nahi, balkay business logic, data handling, aur security manage karna hota hai. Server-side JS APIs banati hai, database se data read/write karti hai, files ko handle karti hai, aur client se aane wali requests ka response bhejti hai. Is environment me JavaScript ko File System (fs), server create karne ki ability, database access, aur OS-level features milte hain, jabke DOM, window, ya localStorage jaise browser-specific features available nahi hote. Client aur server mil kar kaam karte hain: client request bhejta hai aur server data process karke response deta hai—isi coordination se complete web application banti hai.

// Installation of Node JS:
// Install IDE , Node JS , VS Code , Executing Code via REPL means quick testing for our code just like inpect inside console

// How DNS Works :
// Jab tum browser me koi website ka domain type karte ho, jaise google.com, DNS (Domain Name System) us naam ko IP address me convert karta hai. Browser phle cache check karta hai, phir DNS server se poochta hai, aur IP milte hi browser website ke server se connect ho jata hai. Is tarah DNS domain ko computer-friendly address me translate karke website ko access karne me help karta hai.

// How Website Works :
// Jab tum browser me website ka URL type karte ho, browser pehle DNS se IP address leta hai. Phir browser HTTP/HTTPS request ke through server se connect hota hai. Server request process karke response (HTML, CSS, JS) browser ko bhejta hai, aur browser is data ko render karke webpage display karta hai. Is tarah client aur server mil kar web kaam karte hain aur hum website access kar pate hain.

// What are Protocols :
// Protocol ek set of rules hai jo define karta hai ki do computers ya devices kaise communicate karenge. Jaise hum phone par baat karte waqt ek language aur rules follow karte hain, waise hi internet me data exchange ke liye protocols use hote hain.

// Common Protocols :
// HTTP aur HTTPS dono web ke liye common protocols hain. HTTP (HyperText Transfer Protocol) normal communication ke liye hota hai jisme data plain text me send hota hai, isliye security kam hoti hai. HTTPS (HTTP Secure), HTTP ka secure version hai jo data ko encrypt karke bhejta hai, isliye sensitive information jaise passwords, banking details safe rehti hai. URL me farq bhi ye hota hai: http:// aur https://. Simple words me: HTTP = normal, HTTPS = secure.

// Node Core Modules = Node.js ke built-in modules jo common tasks ke liye ready hote hain, npm install ki zarurat nahi hoti.

// require keyword : isme koi bh module use kr rahe ho to ap require("os") ki help se define kraigai.....

// Node Life Cycle and Event Loop :
// Node.js single-threaded hota hai, matlab JavaScript ek hi main thread par chalti hai, lekin Event Loop isay smart bana deta hai. Jab client se request aati hai, Event Loop check karta hai ke kaam simple hai ya time-consuming. Simple kaam turant main thread par ho jata hai, lekin heavy kaam jaise file read, database ya API call Event Loop thread pool ko de deta hai, taake main thread block na ho. Jab background kaam complete ho jata hai, uska result event queue ke zariye wapas Event Loop tak aata hai aur phir client ko response bhej diya jata hai. Isi wajah se Node.js aik hi waqt me multiple requests handle karta hua lagta hai, jabke asal me JavaScript single thread par hi chal rahi hoti hai.

// Creating First Node Server :

const http = require('http')
const server = http.createServer((req,res) => {
    res.write("My First Node JS Server")
    res.end()  // res.end() HTTP response ko close karta hai.
})
const PORT = 300
server.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`)
})

// const http = require('http')
// const server = http.createServer((req,res) => {
//    console.log(req)
//    process.exit() // process.exit() poori Node.js process ko terminate kar deta hai.
// })
// const PORT = 300
// server.listen(PORT,() => {
//     console.log(`Server running at http://localhost:${PORT}`)
// })
