require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DBPASSWORD)
        .then( () => {
            app.emit('connected')
        });


app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);
    
    
app.on('connected', () => {
    console.log('connected to data base with success!')
    app.listen(3333, () => console.log('webserver: http://localhost:3333'));
})