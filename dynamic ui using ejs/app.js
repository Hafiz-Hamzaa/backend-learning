// ---------- Dynamic UI Using EJS (Embeded JavaScript)

// 🔹 Dynamic UI kya hoti hai?
// Dynamic UI =HTML jo runtime pe data ke sath change ho
// HTML same
// Data different
// Output user ke hisaab se change 👉 Ek hi page hota hai 👉 Data backend se change hota rehta hai

// Whats the Problem before EJS : Abhi data staic hai Welcome User sb user kai liye User hi dekh rh hai abhi yaha Backend ka data use nh ho rh ab manlo Backend me aik var rkha hai var userName = "Hamza" ab tum is var ko directly html me use nh krkste  HTML ko JavaScript variables ka idea hi nahi

// 🔥 Yahin pe EJS enter hota hai

// EJS = HTML + JavaScript ko mix karne ka tareeqa
// Matlab:
// HTML same rehti hai
// Backend ka data inject hota hai
// UI dynamic ban jaati hai

// Now We are using EJS 
// Step 01: npm i ejs 
// Step 2: Express ko batao ke EJS use karna hai


// Partials : Har website me Header and footer same hota to kia ham har page me copy-paste krte rahe gai nh aisa nh ham view me partials ka folder banaker header.ejs and footer.ejs ka code snippet likhlegai
// ✅ Solution = Partials
// Ek HTML snippet bana lo → har page me include kar lo

// -------- Basic Setup
const express = require('express')
const path = require('path')
const app = express()

// Express, ab HTML nahi : EJS templates use karega
app.set('view engine','ejs')
app.set('views','views') // optional yaha per jo apne folder ka name krha tha wo dalna hai

app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname,'views','home.html'));
// ab iski jaga yaha use kregai
// Backend se Data bhejna ejs ko

const userName = 'Hamza'
res.render('home', {username:userName} )
});

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})