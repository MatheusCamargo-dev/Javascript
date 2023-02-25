exports.get = (req, res) =>{
    res.send(`
        <form action="/" method="POST">
        Name: <input type="text" name="name">
        <button>Submit</button>
        </form>
    `)
} 
exports.post = (req, res) => {
    res.send(`Hello ${req.body.name}!`)
}