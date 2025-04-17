const express = require("express");
const { getAllContacts, postContact } = require("../controllers/contactController");
const contactRoute = express.Router();
contactRoute.get("/contacts",getAllContacts);
contactRoute.post("/contacts", postContact);
module.exports = {
  contactRoute,
};
