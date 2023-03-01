const Contact = require('../models/ContactModel');

exports.index = async (req, res) =>{
    let contacts = await Contact.find();
    //  console.log(contacts)
    res.render('index', {contacts})
}

exports.post = (req, res) => {
    res.send(req.body)
}