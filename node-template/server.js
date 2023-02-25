const express = require('express');
const app = express();
app.listen(3333, () => console.log('webserver: http://localhost:3333'));
app.use(express.urlencoded({extended: true}))

app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="POST">
        Name: <input type="text" name="name">
        <button>Submit</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send('')
})
