const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if(req.session.user) res.redirect('/');
    res.render('login')
}

exports.register = async (req, res) => {
    try{
        const login = new Login(req.body);
        await login.register()
    
        if (login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(function() {
              res.redirect('back')
            });
            return;
        }
    
        req.flash('success', 'User created with success!');
        req.session.save(function() {
            res.redirect('back')
        });
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}

exports.login = async (req, res, next) => {
    try{
        const login = new Login(req.body);
        await login.login()
    
        if (login.errors.length > 0){
            req.flash('errors_login', login.errors);
            req.session.save(function() {
              res.redirect('back')
            });
            return;
        }
        
        req.flash('success_login', 'Successfully  login');

        req.session.user = login.user;
        req.session.save(function() {
            res.redirect('/')
        });

    }catch(e){
        console.log(e);
        return res.render('404');
    }
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/login')
}