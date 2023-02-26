require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DBPASSWORD)
        .then( () => {
            app.emit('connected')
        });
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csurf = require('csurf');
const { middleware, checkCsrfErro, csrfMiddleware} = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded( { extended: true } ))
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'Iw4Ti6Lj9Sh5Hs',
    store: MongoStore.create({ mongoUrl: process.env.DBPASSWORD }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //second -> minute -> hour -> day
        httpOnly: true
    }
})

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csurf());

// my middlewares
app.use(csrfMiddleware);
app.use(checkCsrfErro);
app.use(middleware);
app.use(routes);
    
    
app.on('connected', () => {
    console.log('connected to data base with success!')
    app.listen(3333, () => console.log('webserver: http://localhost:3333'));
})