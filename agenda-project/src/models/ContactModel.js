const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: false, default:'' },
    email: { type: String, required: false, default:'' },
    phone: { type: String, required: false, default:'' },
    createdOn: { type: Date, default: Date.now}
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.contact = null;
    }

    valid() {
        this.cleanUp();
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push(`E-mail isn't valid.`);
        if(!this.body.name) this.errors.push(`Name is required`);
        if(!this.body.email && !this.body.phone) {
            this.errors.push('At least one contact is required to be submitted: e-mail or phone.');
        }
        
    }

    async register(){
        this.valid()

        if(this.errors.length > 0) return;

        this.contact = await ContactModel.create(this.body);
    }

    static async find(id = ''){
        if(typeof id !== 'string') return;
        if(id.length > 0){
            try{
                const contact = await ContactModel.findById(id);
                return contact;
            }catch(e){
                console.log(e);
            }        
        }else{
            try{
                const contacts = await ContactModel.find().sort({ createdOn: 1 });
                return contacts;
            }catch(e){
                console.log(e);
            }
        }
    }

    async update(id){
        if(typeof id !== 'string') return;
        this.valid();   
        if(this.errors.length > 0) return;
        this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true});
    }

    static async delete(id){
        if(typeof id !== 'string') return;
        const contact = await ContactModel.findByIdAndDelete(id);
        return contact;
    }

    cleanUp(){
        for(let key in this.body){
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            name: this.body.name,
            last_name: this.body.last_name,
            email: this.body.email,
            phone: this.body.phone,
        }
    }
}

module.exports = Contact;