const { response } = require('express');
const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET   PUT    DELETE

app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="POST">
        Name: <input type="text" name="name">
        <button>Submit</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('I received the form!')
})

app.get('/contact', (request, response) => {
    response.send('Contact us!');
});

app.listen(3333, () => {
    console.log('Server running in port 3333');
    console.log('webserver: http://localhost:3333');

});