const Router = require('express');
const router = Router();

router.get('/delivery', async (req, res) => {
    res.render('delivery', {
      title: "Доставка",
      isDelivery: true,
    });
  });

module.exports = router;