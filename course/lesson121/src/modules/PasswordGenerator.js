
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
        const symbols = '.,;~^[]{}!@#$%*()_+=-'
        return symbols[PasswordGenerator(0, symbols.length)]
     }

     generatePassword(qtd, uppercase, lowercase, number, symbol){
        
     }


}