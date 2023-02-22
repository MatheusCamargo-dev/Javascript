
export class PasswordGenerator{

     static rand (min, max) {
        return Math.floor(Math.random() * (max - min) + min); 
     }  

     static generateUpperCase(){
        return String.fromCharCode(PasswordGenerator.rand(65, 91))
     }

     static generateLowerCase(){
        return String.fromCharCode(PasswordGenerator.rand(97, 123))
     }

     static generateNumber(){
        return String.fromCharCode(PasswordGenerator.rand(48, 58))
     }

     static generateSymbol(){
        let symbols = '.,;~^[]{}!@#$%*()_+=-'
        return symbols[PasswordGenerator.rand(0, symbols.length)]
     }

     static generatePassword(qtd, uppercase, lowercase, number, symbol){
        const arrayPassword = [];
        qtd = Number(qtd);

        for(let i = 0; i <= qtd; i++){
            uppercase && arrayPassword.push(PasswordGenerator.generateUpperCase());
            lowercase && arrayPassword.push(PasswordGenerator.generateLowerCase());
            number && arrayPassword.push(PasswordGenerator.generateNumber());
            symbol && arrayPassword.push(PasswordGenerator.generateSymbol());
        }

        return arrayPassword.join('').slice(0, qtd);
     }


}