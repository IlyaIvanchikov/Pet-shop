const Router = require('express');
const User = require('../models/user');
const router = Router();

router.get('/auth/login', async (req, res) => {
    res.render('auth/login', {
      title: "Авторизация",
      isLogin: true,
      LoginError: req.flash('LoginError')
    });
  });


router.post('/auth/login', async (req, res) => {
  try {
    const user = new User(req.body.login, req.body.email, req.body.password);
    const userLoG = await user.search();
    if(userLoG) {
      res.redirect('/');
    }
    else {
      req.flash('LoginError', 'Ошибка входа, проверьте вводимые данные');
      res.redirect('/auth/login#login');
    }

  }
  catch (e) {
    console.log(e);
    }
  });  

router.post('/auth/register', async (req, res) => {
    try {
      const user = new User(req.body.login, req.body.email, req.body.password);
      await user.save();
      res.redirect('/');
    }
    catch (e) {
      console.log(e);
      }
    });  
module.exports = router;