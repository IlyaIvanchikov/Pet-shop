const Router = require('express');
const contacts = require('../models/contacts');
const router = Router();

router.get('/contacts', async (req, res) => {
    const contact = await contacts.allInfo();
    res.render('contacts', {
      title: "Контакты",
      isContacts: true,
      contact
    });
  });

module.exports = router;