const { getDB } = require("../utils/db");
const { ObjectId } = require("mongodb");

// GET all contacts
exports.getAllContacts = async (req, res) => {
  const db = getDB();
  const contacts = await db.collection("contacts").find().toArray();
  res.render("contacts/index", { contacts });
};

// Show add form
exports.showAddForm = (req, res) => {
  res.render("contacts/add");
};

// ADD contact
exports.addContact = async (req, res) => {
  const db = getDB();
  const { name, email, phone, notes } = req.body;

  await db.collection("contacts").insertOne({
    name,
    email,
    phone,
    notes,
    createdAt: new Date()
  });

  res.redirect("/contacts");
};

// Show edit form
exports.showEditForm = async (req, res) => {
  const db = getDB();
  const contact = await db
    .collection("contacts")
    .findOne({ _id: new ObjectId(req.params.id) });

  res.render("contacts/edit", { contact });
};

// UPDATE contact
exports.updateContact = async (req, res) => {
  const db = getDB();
  const { name, email, phone, notes } = req.body;

  await db.collection("contacts").updateOne(
    { _id: new ObjectId(req.params.id) },
    {
      $set: {
        name,
        email,
        phone,
        notes
      }
    }
  );

  res.redirect("/contacts");
};

// DELETE contact
exports.deleteContact = async (req, res) => {
  const db = getDB();
  await db
    .collection("contacts")
    .deleteOne({ _id: new ObjectId(req.params.id) });

  res.redirect("/contacts");
};
