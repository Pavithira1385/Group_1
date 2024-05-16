const express = require('express');
const Registration = require('../models/RegistrationModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allRegistrations = await Registration.find();
    res.json(allRegistrations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const {  name, email, birth, country, contact, encryptedPassword } = req.body;

  const registration = new Registration({
    //msg: msg,
    name: name,
    email: email,
    birth: birth,
    country: country,
    contact: contact,
    encryptedPassword: encryptedPassword
  });

  try {
    const newRegistration = await registration.save();
    res.status(201).json(newRegistration);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
