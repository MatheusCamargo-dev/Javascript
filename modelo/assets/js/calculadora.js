const viewResult = document.querySelector('#viewResult');
const clear = document.querySelector('#clear');
const calcula = document.querySelector('#igual');
const operadores = document.querySelectorAll('.operador');
const numeros = document.querySelectorAll('.num');

const calculadora = {
    operador: '',
    resultado: 0,
    numeros: [],
    setNumeros: function(numero){
        if(numero !== ''){
            if(this.numeros[0] > 0 && this.operador == ''){
                // console.log(parseInt(this.numeros[0] + numero))
                this.numeros[0] = parseInt(this.numeros[0] + numero)
                // console.log(this.numeros[0])
            }else if(this.numeros[0] > 0 && this.operador !== '' && this.numeros[1] > 0){
                this.numeros[1] = parseInt(this.numeros[1] + numero)
            }
            else{
                this.numeros.push(parseInt(numero));
            }
            // console.log(numero)
            
        }else{
            this.numeros = [];
        }
    },
    getNumeros: function(i){
        return this.numeros[i];
    },
    calcula: function(){
        if(this.operador !== undefined){
            if (this.operador === '+') this.resultado = (this.numeros[0] + this.numeros[1]);
            if (this.operador === '-') this.resultado = (this.numeros[0] - this.numeros[1]);
            if (this.operador === '*') this.resultado = (this.numeros[0] * this.numeros[1]);
            if (this.operador === '/') this.resultado = (this.numeros[0] / this.numeros[1]);
            this.operador = ''
        }else{
            window.alert('Informe um operador.')
        }

        calculadora.setNumeros('')
        calculadora.setNumeros(this.resultado)
        return this.resultado
    },
    // resultado
}

const view = {
    numeros: [],
    setView: function(resultado){
        if(resultado == ''){
            viewResult.value = ''
        }else{
            viewResult.value += resultado
        }
    },
    getView: function(){
        return viewResult.value;
    }
}

const validaNum = () =>{
   
    if(calculadora.resultado > 0 && calculadora.operador == ''){
        calculadora.resultado = ''
        calculadora.operador = ''
        calculadora.setNumeros('')
        view.setView('')
    }
    return true
}

const validaOperador = () =>{
    console.log(calculadora.getNumeros(0))
    console.log(calculadora.operador)
    if(calculadora.getNumeros(0) == undefined){
        window.alert('Informe um número primeiro')
        return false
    }else if(calculadora.operador != ''){
        window.alert('Você já adicionou um operador.')
        return false
    }else{
        return true
    }
}

clear.addEventListener('click', function(){
    view.setView('')
    calculadora.setNumeros('')
 })


for(let op of operadores){
    op.addEventListener('click', function(){
      if(validaOperador()){
        calculadora.operador = this.innerHTML
        view.setView(calculadora.operador)
      }
   })
}

for(let num of numeros){
    num.addEventListener('click', function(){
        let num = this.innerHTML
        if(validaNum(num)){
            view.setView(num)
            calculadora.setNumeros(num)
        }
    })
 }

 calcula.addEventListener('click', function(){
    let resultado = calculadora.calcula()
    view.setView('')
    view.setView(resultado)
 })

