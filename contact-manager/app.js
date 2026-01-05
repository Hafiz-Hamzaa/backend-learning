const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const { connectDB } = require("./utils/db");

const app = express();
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
const contactRoutes = require("./routes/contactRoutes");
app.use("/contacts", contactRoutes);

// Home
app.get("/", (req, res) => {
  res.redirect("/contacts");
});

// Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));