exports.get = (req, res) =>{
    res.send(`Thank u for contacting us`)
} 
exports.post = (req, res) => {
    res.send(`Hello ${req.body.name}!`)
}