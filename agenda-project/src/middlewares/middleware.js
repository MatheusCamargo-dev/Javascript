exports.middleware = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.success_login = req.flash('success_login');
    res.locals.errors_login = req.flash('errors_login');
    res.locals.user = req.session.user;
    next()
}

exports.checkCsrfErro = (err, req, res, next) => {
    if(err) {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next();
}