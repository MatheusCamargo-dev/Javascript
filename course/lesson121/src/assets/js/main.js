import '../css/bootstrap.css';
import { PasswordGenerator } from '../../modules/PasswordGenerator';

const password_field = document.querySelector('.generated-password');

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.id == 'generate-password'){
        const qtd = document.querySelector('#password-length');
        const uppercase = document.querySelector('.chk-uppercase');
        const lowercase = document.querySelector('.chk-lowercase');
        const number = document.querySelector('.chk-number');
        const symbol = document.querySelector('.chk-symbols');

        const password = PasswordGenerator.generatePassword(qtd.value, uppercase.checked, lowercase.checked, number.checked, symbol.checked);
        password_field.innerText = password;
    }
    
    if(el.id == 'clipboard'){
        let copyText = password_field.innerText;
        if(copyText !== ''){
            navigator.clipboard.writeText(copyText);
            alert("Copied password.")
        }else{
            alert("Please generate a password to be able to copy.")            
        }
    }
})