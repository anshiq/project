
const { Contact } = require("../models/contactSchema");
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.status(200).json({ contacts: contacts });
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};
const postContact = async (req, res) => {
  const { email, name, phoneNumber } = req.body;
  if (!email || !name || !phoneNumber) {
    return res.status(500).json({
      msg: "One of Required Field is not present",
    });
  }
  try {
    const contact = await Contact.create({
      name,
      email,
      phoneNumber,
    });
    return res.json(contact);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
module.exports = {
  getAllContacts,
  postContact,
};
