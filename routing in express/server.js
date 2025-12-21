const express = require('express')
const app = express()


// Routing according Methods
// Method-based routing URL se match karti hai, lekin tabhi chalti hai jab HTTP method bhi match kare.

// middleware to parse form data : Ye middleware browser se aane wale FORM data ko read aur parse karta hai taake tum req.body me data use kar sako.
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res) => {
        res.send(`
        <h1>Home Page</h1>
        <form action="/submit" method="POST">
            <input type="text" name="username" placeholder="Enter name" />
            <button type="submit">Submit</button>
        </form>
    `);
})

app.get("/about", (req,res) => {
    res.send('<h1>About Page</h1>');
})

app.post("/submit", (req,res) => {
    console.log(req.body); // { username: 'Hamza' }
    res.send('<h1>Form Submitted Successfully</h1>');
})




const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})