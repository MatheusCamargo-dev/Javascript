const print = (...string) => console.log(...string);

class RegisterForm {
    constructor() {
        this.form = document.querySelector('#form');
        this.formFields = this.form.querySelectorAll('input');
        this.events();
    }

    events(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let formFields = this.formFields;
        if(this.isValid(formFields)){
            alert('Form valid.');
            this.form.submit();
        }
    }

    isValid(formFields){
        let valid = true;

        let errorText = this.form.querySelectorAll('.text-danger');
        if (errorText.length > 0) errorText.forEach(e => e.remove());
        for(let field of formFields){

            if(!field.value) {
                let fieldName = field.previousElementSibling.innerText;
                fieldName = fieldName.slice(0, -1);
                this.errorAlert(field, `Field "${fieldName}" cannot be blank.`)
                valid = false;
            }

            if(field.id == 'cpf'){
                if(!this.validCPF(field)) valid = false;
            }

            if(field.id == 'user'){
                if(!this.validUser(field)) valid = false;
            }

            if(field.id == 'password' || field.id == 'repeat-password'){
              
            }
        }

        if(!this.validPassword()) valid = false;

        return valid;

    }

    errorAlert(field, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('text-danger');
        div.classList.add('fs-6');
        field.insertAdjacentElement('afterend', div)
    }

    validCPF(fieldCpf) {
        const cpf = new CpfValidator(fieldCpf.value);

        if(!cpf.valid()){
            this.errorAlert(fieldCpf, 'CPF Invalid.');
            return false;
        }

        return true;
    }

    validUser(fieldUser){
        const user = fieldUser.value;
        let userValid = true;

        if(user.length < 3 || user.length > 13) {
            this.errorAlert(fieldUser, 'The username must be between 3 and 12 characters.');
            userValid = false;
        }

        if(!user.match(/[a-zA-Z0-9]+$/g)){
            this.errorAlert(fieldUser, 'The username can only contain letters and/or numbers')
            userValid = false;
        }


        return userValid;
    }

    validPassword(){
        let passwordIsValid = true;
        let password = this.form.querySelector('#password');
        let repeat_password = this.form.querySelector('#r-password');

        if(password.value!== repeat_password.value){
            this.errorAlert(password, 'The password and repeat password fields must be the same');
            this.errorAlert(repeat_password, 'The password and repeat password fields must be the same');
            passwordIsValid = false;
        }

        if(password.length < 6 || password.length > 12){
            this.errorAlert(password, 'The password must be between 6 and 12 characters.');
            this.errorAlert(repeat_password, 'The password must be between 6 and 12 characters.');
            passwordIsValid = false;
        }

        return passwordIsValid;
    }
}

const form = new RegisterForm();
const viewCPF = new ViewCPF()
viewCPF.init()