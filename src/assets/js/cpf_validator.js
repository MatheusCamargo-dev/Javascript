const print = (...string) => console.log(...string);

function Cpf (cpf){
    this.cpf = cpf

    this.treatCpf = function(){
        this.cpf = this.cpf.replace(/[^0-9]/g,'')
        this.cpf = this.cpf.toString()
    }

    this.valid = function(){
        this.treatCpf()

        let cont = 0;
        let tot = 0;
        
        for(let i = 10; i >= 2; i--){
            tot += this.cpf[cont] * i;
            cont++;
        }

        tot = 11-(tot%11);
        if (tot > 9) tot = 0;

        if (tot == this.cpf[9]){

            let cont = 0;
            let tot = 0;
            for(let i = 11; i >= 2; i--){
                tot += this.cpf[cont] * i;
                cont++;
            }

            tot = 11-(tot%11);
            if (tot > 9) tot = 0;

            if (tot == this.cpf[10]) return true;
        }
        return false;
    }
}

// const cpf = new Cpf('301.713.760-05');
// print(cpf.valid())

const inputCpf = document.querySelector('#cpf');
const btnCpf = document.querySelector('#btn-cpf');
const viewCpf = document.querySelector('#cpf-view');


inputCpf.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        let cpf = new Cpf(inputCpf.value)
        if(cpf.valid()){
            viewCpf.className = 'text-success'
            viewCpf.innerHTML = 'CPF VALID!'
        }else{
            viewCpf.className = 'text-danger'
            viewCpf.innerHTML = 'CPF INVALID!'
        }
    }
})

btnCpf.addEventListener('click', function(e){
        let cpf = new Cpf(inputCpf.value)
        if(cpf.valid()){
            viewCpf.className = 'text-success'
            viewCpf.innerHTML = 'CPF VALID!'
        }else{
            viewCpf.className = 'text-danger'
            viewCpf.innerHTML = 'CPF INVALID!'
        }
    
})

