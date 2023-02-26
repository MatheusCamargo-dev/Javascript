exports.get = (req, res) =>{
    // req.flash('info', 'success!')
    // req.flash('error', 'user without access!')
    console.log(req.flash('error'), req.flash('info'))
    console.log(req.session.user)

    res.render('index')
}