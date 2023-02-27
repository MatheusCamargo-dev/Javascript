const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController')
const contactController = require('./src/controllers/contactController')

route.get('/', homeController.index);

route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/', loginController.login);
route.get('/login/logout', loginController.logout);

route.get('/contact', contactController.index);
module.exports = route;