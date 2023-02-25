const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController')
// route home
route.get('/', homeController.get);
route.post('/', homeController.post);

// route contact
route.get('/contact', contactController.get);
route.post('/contact', contactController.post);

module.exports = route;