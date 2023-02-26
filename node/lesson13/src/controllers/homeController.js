exports.get = (req, res) =>{
    res.render('index');
    console.log('Log GET session:');
    console.log(req.session);
    return;
}

exports.post = (req, res) => {
    res.send(`Hi, i'm post!`);
    console.log('Log POST session:');
    console.log('User POST:', req.body)
    console.log(req.session);
    return;
}