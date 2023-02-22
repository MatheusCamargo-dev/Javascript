import CpfValidator from "./CpfValidator";

export default class CreateCPF{

    static rand (min = 100000000, max = 900000000) {
       return String(Math.floor(Math.random() * (max - min) + min)); 
    }  

    static build(){
        let cpf = CreateCPF.rand();
        let cpfDigit1 = CpfValidator.digitCpf(cpf+'00', 1)
        let cpfDigit2 = CpfValidator.digitCpf(cpf+cpfDigit1+'00', 1)

        return cpf + cpfDigit1 + cpfDigit2
    }
}