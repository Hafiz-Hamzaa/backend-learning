const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

// Home page
router.get("/", homeController.getAllHomes);

// Add Home form page
router.get("/add", homeController.addHomeForm);

// Add Home form submit
router.post("/add", homeController.addHome);

// Dynamic Path and Home Deatails
router.get("/home/:id", homeController.getHomeDetails);

// Edit Route
router.get("/home/:id/edit", homeController.getEditHome);
router.post("/home/:id/edit", homeController.postEditHome);

// Delete Route
router.post("/home/:id/delete", homeController.postDeleteHome);


// Ye sab routes ke baad add karna
router.use(homeController.notFound);


module.exports = router;
