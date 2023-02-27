const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    valid() {
        this.cleanUp();
        if(!validator.isEmail(this.body.email)) this.errors.push(`E-mail isn't valid.`);

        if(this.body.password.length < 6 || this.body.password.length > 20) this.errors.push('The password must be between 6 and 20 characters.');
    
    }

    async register(){
        this.valid()
        if(this.errors.length > 0) return;
        try{
            this.user = await LoginModel.create(this.body);

        }catch(e){
            console.log(e)
        };
    }

    cleanUp(){
        for(let key in this.body){
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }

}

module.exports = Login;