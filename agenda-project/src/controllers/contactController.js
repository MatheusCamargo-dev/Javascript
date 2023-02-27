exports.index = (req, res) =>{
    if(!req.session.user) res.redirect('/login');
    res.render('contact')
}

exports.post = (req, res) => {
    res.send(req.body)
}