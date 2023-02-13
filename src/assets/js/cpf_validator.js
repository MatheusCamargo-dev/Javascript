const print = (...string) => console.log(...string);

function maskCpf(v)
{
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
}
function CpfValidator (cpf){
    this.cpf = cpf

    Object.defineProperty(this, 'treatCpf', {
        get: function(){
            let treatCpf = this.cpf.replace(/[^0-9]/g,'')
            return treatCpf.toString()
        }
    });
}

CpfValidator.prototype.isSequence = function(){
    const sequence = this.treatCpf[0].repeat(this.treatCpf.length);
    if(sequence == this.treatCpf) return true;
    return false;
}

CpfValidator.prototype.digitCpf = function(treatCpf, digit = 1){

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
    print(digitCpf)
    return digitCpf > 9 ? 0 : digitCpf;
}

CpfValidator.prototype.valid = function(){

    if(this.treatCpf == 'undefined') return false;
    if(this.treatCpf.length !== 11) return false;
    if(this.isSequence()) return false;
    const cpfDigit1 = this.digitCpf(this.treatCpf, 1)
    const cpfDigit2 = this.digitCpf(this.treatCpf, 2)

    const newCpf = this.treatCpf.slice(0,-2)+cpfDigit1+cpfDigit2;
    print(this.treatCpf);
    print(newCpf);
    if (newCpf == this.treatCpf){
        return true;
    }
       
    return false;

}

const inputCpf = document.querySelector('#cpf');
const btnCpf = document.querySelector('#btn-cpf');
const viewCpf = document.querySelector('#cpf-view');

inputCpf.addEventListener('keypress', function(e){

    inputCpf.value = maskCpf(inputCpf.value)
    if(e.keyCode === 13){
        let cpf = new CpfValidator(inputCpf.value)
        if(cpf.valid()){
            viewCpf.className = 'text-success'
            viewCpf.innerHTML = 'CPF VALID!'
        }else{
            viewCpf.className = 'text-danger'
            viewCpf.innerHTML = 'CPF INVALID!'
        }
    }
})

inputCpf.addEventListener('blur', function(e){

    inputCpf.value = maskCpf(inputCpf.value)
})

btnCpf.addEventListener('click', function(){
        let cpf = new CpfValidator(inputCpf.value)
        if(cpf.valid()){
            viewCpf.className = 'text-success'
            viewCpf.innerHTML = 'CPF VALID!'
        }else{
            viewCpf.className = 'text-danger'
            viewCpf.innerHTML = 'CPF INVALID!'
        }
    
})

