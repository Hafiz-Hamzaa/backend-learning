// ---------- MVC Pattern - Model View Controller
// 1️⃣ MVC ka matlab : MVC = Model, View, Controller
// Ye software design pattern hai jo code ko 3 layers me divide karta hai. Har layer ka apna responsibility hota hai:
// Layer 1 : Model - Responsibility : Data aur business logic ko handle karta hai. Database ya JS object/array yahan store hota hai.
// Layer 2 : View - Responsibility : User ko dikhne wala interface. Form, HTML page, template engine jaise EJS use hota hai.
// Layer 3 : Controller - Responsibility : Model aur View ke beech ka mediator(bridge). Request handle karta hai, Model se data fetch karke View ko bhejta hai.

// Writing Files from Data and Reading Files from Data : is se kia hoga sare home save hojai gai json file me server restart bh krogai to ghyb nh hogai 


// Dynamic Path and Model Deepdive
// Topics
// What are Dynamic Paths
// Adding Home Details Page
// Showing Real Home Data
// Adding Favourite Feature
// Adding Favourite Model
// Edit-Home: Adding Feature Skeleton
// Edit-Home:Showing Existing Data
// Edit-Home:Handling Edit Request
// Edit Delete Feature
// Removing Home From Favourites

const express = require("express");
const path = require("path");
const app = express();

// Body parser (form data handle)
app.use(express.urlencoded({ extended: true }));

// Public folder for CSS
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
const homeRoutes = require("./routes/homeRoutes");
app.use("/", homeRoutes);

// Server start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
