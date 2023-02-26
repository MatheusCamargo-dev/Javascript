module.exports = middleware = (req, res, next) => {
    res.locals.varLOCAL = 'this is my local var'
    next()
}