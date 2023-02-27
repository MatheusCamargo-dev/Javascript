exports.index = (req, res) =>{
    res.render('index')
}

exports.post = (req, res) => {
    res.send(req.body)
}