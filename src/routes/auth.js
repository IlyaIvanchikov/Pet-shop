const Router = require('express');
const contacts = require('../models/contacts');
const router = Router();

router.get('/auth/login', async (req, res) => {
    res.render('auth/login', {
      title: "Авторизация",
      isLogin: true,
    });
  });

module.exports = router;