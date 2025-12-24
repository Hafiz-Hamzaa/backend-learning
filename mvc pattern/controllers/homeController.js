const homeModel = require("../models/homeModel");

// Home page: show all homes
const getAllHomes = (req, res) => {
    const homes = homeModel.getAllHomes();
    res.render("index", { homes });  // index.ejs me render karenge
};

// Add Home form page
const addHomeForm = (req, res) => {
    res.render("addHome");  // addHome.ejs me form show hoga
};

// Add Home form submit
const addHome = (req, res) => {
    const { name, address, price,image } = req.body;  // form se data aayega
    homeModel.addHome({ name, address, price,image });
    res.redirect("/");  // form submit ke baad home page pe redirect
};

// 404 page handler
const notFound = (req, res) => {
    res.status(404).render("404"); // views/404.ejs render karega
};

module.exports = {
    getAllHomes,
    addHomeForm,
    addHome,
    notFound
};
