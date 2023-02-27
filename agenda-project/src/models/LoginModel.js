const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');
const { async } = require('regenerator-runtime');

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

    async login (){
        this.valid();
        if(this.errors.length > 0) return;
        this.user =  await LoginModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.errors.push(`This user doesn't exist.`);
            return;
        }

        if(!bcryptjs.compareSync(this.body.password, this.user.password)){
            this.errors.push('Invalid password.');
            this.user = null;
            return;
        }
    }

    async register(){
        this.valid()

        if(this.errors.length > 0) return;

        this.userExists();

        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body);
    }

    async userExists(){
       this.user =  await LoginModel.findOne({ email: this.body.email });
       if(this.user) this.errors.push('This user already exists')
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