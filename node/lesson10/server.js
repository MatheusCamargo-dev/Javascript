const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3333, () => console.log('webserver: http://localhost:3333'));
