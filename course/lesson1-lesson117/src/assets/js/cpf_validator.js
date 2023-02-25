function maskCpf(v)
{
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
}

class CpfValidator{

    constructor(cpf){
        this.treatCpf = cpf.replace(/\D+/g,'');
    }

    isSequence(){
        return this.treatCpf.charAt(0).repeat(11) == this.treatCpf;
    }

    digitCpf(treatCpf, digit = 1){
        
        let partialCpf;

        if(digit == 1){
            partialCpf = treatCpf.slice(0, -2)
        }else if(digit == 2){
            partialCpf = treatCpf.slice(0, -1);
        }
    
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
        const cpfDigit1 = this.digitCpf(this.treatCpf, 1)
        const cpfDigit2 = this.digitCpf(this.treatCpf, 2)

        const newCpf = this.treatCpf.slice(0,-2)+cpfDigit1+cpfDigit2;

        if (newCpf == this.treatCpf) return true;
        
        return false;
    }
};


class ViewCPF{
    constructor(){
        this.inputCpf = document.querySelector('#cpf');

    }
    init(){
        this.inputCpf.addEventListener('blur', e => {
            this.inputCpf.value = maskCpf(this.inputCpf.value)
        })

        this.inputCpf.addEventListener('keypress', e => {
            this.inputCpf.value = maskCpf(this.inputCpf.value)
        })
    }
}