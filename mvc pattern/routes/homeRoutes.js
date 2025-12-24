const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

// Home page
router.get("/", homeController.getAllHomes);

// Add Home form page
router.get("/add", homeController.addHomeForm);

// Add Home form submit
router.post("/add", homeController.addHome);

// Ye sab routes ke baad add karna
router.use(homeController.notFound);


module.exports = router;
