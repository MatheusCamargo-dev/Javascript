export default class CpfValidator{

    constructor(cpf){
        this.treatCpf = cpf.replace(/\D+/g,'');
    }

    isSequence(){
        return this.treatCpf.charAt(0).repeat(11) == this.treatCpf;
    }

    static digitCpf(treatCpf, digit = 1){
        
        let partialCpf;

        console.log(treatCpf)
        if(digit == 1){
            partialCpf = treatCpf.slice(0, -2);
        }else if(digit == 2){
            partialCpf = treatCpf.slice(0, -1);
        }
        console.log(partialCpf)
    
        const partialCpfArray = Array.from(partialCpf);
    
        let regressiveCont = partialCpfArray.length + 1;
    
        let totCalc = partialCpfArray.reduce((ac, value) => {
            ac += (Number(value) * regressiveCont);
            regressiveCont--;
            return ac;
        }, 0)
    
        const digitCpf = 11 - (totCalc%11);
        return digitCpf > 9 ? 0 : digitCpf;
    }
    
    valid() {
        if(!this.treatCpf) return false;
        if(this.treatCpf.length !== 11) return false;
        if(this.isSequence()) return false;
        const cpfDigit1 = CpfValidator.digitCpf(this.treatCpf, 1)
        const cpfDigit2 = CpfValidator.digitCpf(this.treatCpf, 2)

        const newCpf = this.treatCpf.slice(0,-2)+cpfDigit1+cpfDigit2;

        if (newCpf == this.treatCpf) return true;
        
        return false;
    }
}