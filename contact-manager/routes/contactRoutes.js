const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Show all contacts
router.get("/", contactController.getAllContacts);

// Show add form
router.get("/add", contactController.showAddForm);

// Add contact
router.post("/add", contactController.addContact);

// Show edit form
router.get("/edit/:id", contactController.showEditForm);

// Update contact
router.put("/edit/:id", contactController.updateContact);

// Delete contact
router.delete("/delete/:id", contactController.deleteContact);

module.exports = router;
