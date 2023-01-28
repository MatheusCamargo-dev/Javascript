const viewResult = document.querySelector('#viewResult');
const clear = document.querySelector('#clear');
const calcula = document.querySelector('#igual');
const apagar = document.querySelector('#apagar');
const operadores = document.querySelectorAll('.operador');
const numeros = document.querySelectorAll('.num');
// var operacao = []

const calculadora = {
    operadores: [],
    numeros: [],
    resultado: 0,
    setNumeros: function(numero){
        if(numero !== ''){
            if(this.numeros[0] > 0 && this.operadores.length == 0){
                // console.log(parseInt(this.numeros[0] + numero))
                this.numeros[0] = parseInt(this.numeros[0] + numero)
                // console.log(this.numeros[0])
            }else if(this.numeros[0] > 0 && this.operadores.length > 0 && this.numeros[1] > 0){
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
    getQtdNumeros: function(){
        return this.numeros.length
    },
    set ultimoNumero(numero){
        this.numeros[this.getQtdNumeros() - 1] = parseInt(numero)
    },
    get ultimoNumero(){
        return this.numeros[this.getQtdNumeros() - 1]
    },
    calcula: function(){
        if(this.operadores.length > 0){
            if (this.operadores[0] === '+') this.resultado = (this.numeros[0] + this.numeros[1]);
            if (this.operadores[0] === '-') this.resultado = (this.numeros[0] - this.numeros[1]);
            if (this.operadores[0] === '*') this.resultado = (this.numeros[0] * this.numeros[1]);
            if (this.operadores[0] === '/') this.resultado = (this.numeros[0] / this.numeros[1]);
            this.operadores = []
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
    },
    apagaUltimoValor: function(){
        let texto = view.getView()
        view.setView('')
        view.setView(texto.slice(0, -1))
    }
}

const validaNum = () =>{
   
    if(calculadora.resultado > 0 && calculadora.operadores.length == 0){
        calculadora.resultado = ''
        calculadora.operador = ''
        calculadora.setNumeros('')
        view.setView('')
    }
    return true
}

const validaOperador = () =>{
    if(calculadora.getNumeros(0) == undefined){
        window.alert('Informe um número primeiro')
        return false
    }else if(calculadora.operadores.length > 0){
        window.alert('Você já adicionou um operador.')
        return false
    }else{
        return true
    }
}

const apagaUltimoValor = (numero) => {
    return numero.slice(0, -1)
}

clear.addEventListener('click', function(){
    view.setView('')
    calculadora.setNumeros('')
 })


for(let op of operadores){
    op.addEventListener('click', function(){
      if(validaOperador()){
        calculadora.operadores[0] = this.innerHTML
        view.setView(calculadora.operadores[0])
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

 apagar.addEventListener('click', function(){
     let ultimoNumero = calculadora.ultimoNumero.toString()
     let numero = apagaUltimoValor(ultimoNumero)
     calculadora.ultimoNumero = numero
     view.apagaUltimoValor()
 })
