exports.middleware = (req, res, next) => {
    res.locals.varLOCAL = 'this is my local var'
    next()
}

exports.checkCsrfErro = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next();
}