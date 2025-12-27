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

// Home Details function
const getHomeDetails = (req, res) => {
     console.log("ID =>", req.params.id); // 🔴 ADD THIS
    const homeId = req.params.id;   // 🔴 URL se id
    const home = homeModel.getHomeById(homeId);

    if (!home) {
        return res.status(404).render("404");
    }

    res.render("home-details", { home });
};

// Edit Function
const getEditHome = (req, res) => {
    const homeId = req.params.id;           // 🔴 dynamic id
    const home = homeModel.getHomeById(homeId); // 🔴 model se data

    if (!home) {
        return res.status(404).render("404");
    }

    res.render("edit-home", { home }); // 🔴 data view ko
};


const postEditHome = (req, res) => {
    const homeId = req.params.id;

    const updatedHome = {
        id: homeId,                // 🔴 same id
        name: req.body.name,
        address: req.body.address,
        price: req.body.price,
        image: req.body.image
    };

    homeModel.updateHome(updatedHome);

    res.redirect("/home/" + homeId);
};

const postDeleteHome = (req, res) => {
    const homeId = req.params.id;

    homeModel.deleteHome(homeId);

    res.redirect("/");
};




module.exports = {
    getAllHomes,
    addHomeForm,
    addHome,
    notFound,
    getHomeDetails, // 🔴 new
    getEditHome,
    postEditHome,
    postDeleteHome
 // 🔴 new
};
