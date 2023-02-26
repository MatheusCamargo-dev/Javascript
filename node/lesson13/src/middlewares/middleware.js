module.exports = myMiddleware = (req, res, next) => {
    req.session =  {name: 'user', password: '123'};
    next()
}