const axios = require('axios');
const mod = require('./module.js').speakName;
mod('Sanji', 'Vinsmoke')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json').then( r => console.log(r.data))
