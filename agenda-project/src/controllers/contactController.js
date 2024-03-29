const Contact = require('../models/ContactModel');

exports.index = (req, res) =>{
    res.render('contact', { contact: {} })
}

exports.post = (req, res) => {
    res.send(req.body)
}

exports.register = async (req, res) =>{
    try{
        const contact = new Contact(req.body);
        await contact.register();
        if(contact.errors.length > 0){
            req.flash('errors', contact.errors);
            req.session.save(function() {
              res.redirect('back')
            });
            return;
        }
        req.flash('success', 'Contact registered with success!');
        req.session.save(function() {
            res.redirect(`/contact/${contact.contact._id}`)
        });
    }catch(e){
        console.log(e);
        return res.render('404');
    }
}

exports.getContact = async (req, res) => {
    const contact = new Contact(req.body);
    
    const allContact = await contact.getContacts()
    return;
}

exports.editIndex = async (req,res) => {
    if(!req.params.id) return res.render('404');
    const contact = await Contact.find(req.params.id);
    if(!contact) return res.render('404');
    res.render('contact', { contact })

}

exports.update = async (req, res) => {
    try{
        const contact = new Contact(req.body);
        await contact.update(req.params.id);
        if(contact.errors.length > 0){
            req.flash('errors', contact.errors);
            req.session.save(function() {
              res.redirect('back')
            });
            return;
        }
        req.flash('success', 'Contact edited with success!');
        req.session.save(function() {
            res.redirect(`back`)
        });
    }catch(e){
        console.log(e);
        return res.render('404');
    }
   
}

exports.delete = async (req, res) => {
    try{
        if(!req.params.id) return res.render('404');
        const contact = await Contact.delete(req.params.id);
        if(!contact) return res.render('404');

        req.flash('success', 'Contact deleted with success!');
        req.session.save(function() {
            res.redirect(`back`)
        });
    }catch(e){
        console.log(e)
    }
}