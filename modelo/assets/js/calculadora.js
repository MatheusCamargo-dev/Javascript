const viewResult = document.querySelector('#viewResult');
const clear = document.querySelector('#clear');
const calcula = document.querySelector('#igual');
const apagar = document.querySelector('#apagar');
const historico = document.querySelector('#historico');
const addFloat = document.querySelector('#float');
const operadores = document.querySelectorAll('.operador');
const numeros = document.querySelectorAll('.num');
// var operacao = []

const calculadora = {
    operadores: [],
    numeros: [],
    resultado: 0,
    calculando: true,
    setNumeros: function(numero){
        if(numero !== ''){
            if(this.numeros[0] > 0 && this.operadores.length == 0){
                this.numeros[0] = parseFloat(this.numeros[0] + numero)
            }else if(this.numeros[0] > 0 && this.operadores.length > 0 && this.numeros[1] > 0){
                this.numeros[1] = parseFloat(this.numeros[1] + numero)
            }
            else{
                this.numeros.push(parseFloat(numero));
            }
            
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
        if(numero.includes('.')){
            this.numeros[this.getQtdNumeros() - 1] = numero
        }else{
            this.numeros[this.getQtdNumeros() - 1] = parseInt(numero)
        }
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
            if (this.operadores[0] === '**') this.resultado = (this.numeros[0] ** this.numeros[1]);
            this.operadores = []
        }else{
            window.alert('Informe um operador.')
        }

        calculadora.setNumeros('')
        calculadora.setNumeros(this.resultado)
        calculadora.calculando = false;
        return this.resultado
    },
    // resultado
}

const view = {
    numeros: [],
    historicoView: '',
    setView: function(resultado){
        if(resultado == ''){
            viewResult.value = ''
        }else{
            viewResult.value += resultado

            if(historico.children.length == 0){
                criaParagrafoHist()
            }
            if(calculadora.calculando){
                let ultimoElemento = this.getUltimoElementoHistorico()
                ultimoElemento.innerHTML = this.getView()
            }else{
                let ultimoElemento = this.getUltimoElementoHistorico()
                ultimoElemento.innerHTML += ' = ' + this.getView()
                calculadora.calculando = true
                criaParagrafoHist()
    
            }
        }
        
        
    },
    getView: function(){
        return viewResult.value;
    },
    apagaUltimoValor: function(){
        let texto = view.getView()
        view.setView('')
        view.setView(texto.slice(0, -1))
    },
    getUltimoElemento: function(){
        let ultimoValor = this.getView()
        return ultimoValor[ultimoValor.length - 1]
    },
    getUltimoElementoHistorico: function(){
        return historico.lastElementChild
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

const validaOperador = (operador) =>{
    if(calculadora.getNumeros(0) == undefined){
        window.alert('Informe um número primeiro')
        return false
    }else if(calculadora.operadores.length > 0 && operador !== '*'){
        window.alert('Você já adicionou um operador.')
        return false
    }else if(calculadora.operadores.length == 1 && operador == '*' && calculadora.operadores[0] !== '**'){
        calculadora.operadores[0] = operador + operador
        return true
    }else if(calculadora.operadores[0] == '**'){
        window.alert('Você já adicionou um operador.')
        return false
    }else{
        calculadora.operadores[0] = operador
        return true
    }
}

const apagaUltimoValor = (numero) => {
    return numero.slice(0, -1)
}

clear.addEventListener('click', function(){
    view.setView('')
    calculadora.setNumeros('')
    historico.innerHTML = ''
 })


for(let op of operadores){
    op.addEventListener('click', function(){
      if(validaOperador(this.innerHTML)){
        view.setView(this.innerHTML)
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

 const criaParagrafoHist = () => {
    let p = document.createElement('p')
    historico.appendChild(p)
}

 calcula.addEventListener('click', function(){
    let resultado = calculadora.calcula()
    view.setView('')
    view.setView(resultado)
 })

 apagar.addEventListener('click', function(){
     if(calculadora.operadores.length == 0){
        let ultimoNumero = calculadora.ultimoNumero.toString()
        calculadora.ultimoNumero = apagaUltimoValor(ultimoNumero)
        view.apagaUltimoValor()
     }else if(calculadora.operadores.length > 0 && calculadora.getQtdNumeros() == 1){
        calculadora.operadores = []
        view.apagaUltimoValor()
     }else if(calculadora.operadores.length > 0 && calculadora.getQtdNumeros() == 2){
        let ultimoNumero = calculadora.ultimoNumero.toString()
        calculadora.ultimoNumero = apagaUltimoValor(ultimoNumero)
        view.apagaUltimoValor()
     }
 })

 addFloat.addEventListener('click', function(){
    if(calculadora.operadores.length == 0){
        calculadora.ultimoNumero = calculadora.ultimoNumero.toString() + '.'
        view.setView('.')
     }else if(calculadora.operadores.length > 0 && calculadora.getQtdNumeros() == 1){
        window.alert('Não é possivel adicionar este valor a um operador')
     }else if(calculadora.operadores.length > 0 && calculadora.getQtdNumeros() == 2){
        calculadora.ultimoNumero = calculadora.ultimoNumero.toString() + '.'
        view.setView('.')
     }

 })
