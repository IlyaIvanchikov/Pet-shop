const express = require('express');
const routerHome = require('./routes/index');
const routerContacts = require('./routes/contacts');
const routerDelivery = require('./routes/delivery');
const routerAuth = require('./routes/auth');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();




app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set("view engine", "hbs");
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.urlencoded({ extended: true }));

app.use(routerHome);
app.use(routerContacts);
app.use(routerDelivery);
app.use(routerAuth);

const PORT = process.env.PORT || 3000;

const start = async () => {
   try {
   app.listen(PORT, () => {
       console.log(`server is running on port ${PORT}`);
   })
}
   catch(err) {
       console.log(err);
}
}
start();