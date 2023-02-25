const { response } = require('express');
const express = require('express');
const app = express();
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)
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

app.get('/test/:paramURL?', (req, res) => {
    console.log(req.params) //google.com/params
    console.log(req.query) //google.com?query=query
    res.send(req.params.paramURL)
})
app.post('/', (req, res) => {
    console.log(req.body) //data from form
    res.send(`Data:${req.body.name}`)
})

app.get('/contact', (request, response) => {
    response.send('Contact us!');
});

app.listen(3333, () => {
    console.log('Server running in port 3333');
    console.log('webserver: http://localhost:3333');

});