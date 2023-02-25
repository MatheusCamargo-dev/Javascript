
function Calculadora () {
    this.operadores = [];
    this.numeros = [];
    this.resultado = 0;
    this.calculando = true;
    this.ultimoNumero = '';
    const view = new View(this);
    this.iniciar = function(){
        view.iniciar()
    };
    this.setNumeros = function(numero){
        if(numero !== ''){
            if(this.numeros.length > 0 && this.operadores.length == 0){
                this.numeros[0] = parseFloat(this.numeros[0] + numero)
            }else if(this.numeros.length > 1 && this.operadores.length > 0){
                this.numeros[1] = parseFloat(this.numeros[1] + numero)
            }
            else{
                this.numeros.push(parseFloat(numero));
            }
            
        }else{
            this.numeros = [];
        }

    };
    this.getNumeros = function(i){
        return this.numeros[i];
    };
    this.getQtdNumeros = function(){
        return this.numeros.length
    };
    (this, {
        set ultimoNumero(numero){
            if(numero.includes('.')){
                this.numeros[this.getQtdNumeros() - 1] = numero
            }else{
                this.numeros[this.getQtdNumeros() - 1] = parseInt(numero)
            }
        },
        get ultimoNumero(){
            return this.numeros[this.getQtdNumeros() - 1]
        }
    })
    
    
    this.validaNum = function(){
        if(this.resultado > 0 && this.operadores.length == 0){
            this.resultado = ''
            this.operador = ''
            this.setNumeros('')
            view.setDisplay('')
        }
        return true
    };

    this.validaOperador = function(operador){
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
    };

    this.apagaUltimoValor = function (numero) {
        return numero.slice(0, -1)
    };

    this.calcula = function(){
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
    };
}

function View(calculadora){
    this.numeros = [];
    this.historicoView = '';
    this.display = document.querySelector('#display');
    this.historico = document.querySelector('#historico');
    this.setDisplay = function(resultado){
        if(resultado == ''){
            this.display.value = ''
        }else{
            this.display.value += resultado

            if(this.historico.children.length == 0){
                this.criaParagrafoHist()
            }
            if(calculadora.calculando){
                let ultimoElemento = this.getUltimoElementoHistorico()
                ultimoElemento.innerHTML = this.getDisplay()
            }else{
                let ultimoElemento = this.getUltimoElementoHistorico()
                ultimoElemento.innerHTML += ' = ' + this.getDisplay()
                calculadora.calculando = true
                this.criaParagrafoHist()
    
            }
        }
    };
    this.getDisplay = function(){
        return this.display.value;
    };
    this.apagaUltimoValor = function(){
        let texto = this.getDisplay()
        this.setDisplay('')
        this.setDisplay(texto.slice(0, -1))
    };
    this.getUltimoElemento = function(){
        let ultimoValor = this.getDisplay()
        return ultimoValor[ultimoValor.length - 1]
    };
    this.getUltimoElementoHistorico = function(){
        return this.historico.lastElementChild
    };
    this.clearDisplay = function(){
        this.setDisplay('')
        calculadora.setNumeros('')
        calculadora.resultado = ''
        this.historico.innerHTML = ''
    };
    this.apagaDisplay = function(){
        if(calculadora.operadores.length == 0){
            let ultimoNumero = calculadora.ultimoNumero.toString()
            calculadora.ultimoNumero = calculadora.apagaUltimoValor(ultimoNumero)
            this.apagaUltimoValor()
         }else if(calculadora.operadores.length > 0 && calculadora.getQtdNumeros() == 1){
            calculadora.operadores = []
            this.apagaUltimoValor()
         }else if(calculadora.operadores.length > 0 && calculadora.getQtdNumeros() == 2){
            let ultimoNumero = calculadora.ultimoNumero.toString()
            calculadora.ultimoNumero = calculadora.apagaUltimoValor(ultimoNumero)
            this.apagaUltimoValor()
         }
    };
    this.criaParagrafoHist = function(){
        let p = document.createElement('p')
        this.historico.appendChild(p)
    };
    this.addPonto = function(){
        if(calculadora.operadores.length == 0){
            calculadora.ultimoNumero = calculadora.ultimoNumero.toString() + '.'
            this.setDisplay('.')
         }else if(calculadora.operadores.length > 0 && calculadora.getQtdNumeros() == 1){
            window.alert('Não é possivel adicionar este valor a um operador')
         }else if(calculadora.operadores.length > 0 && calculadora.getQtdNumeros() == 2){
            calculadora.ultimoNumero = calculadora.ultimoNumero.toString() + '.'
            this.setDisplay('.')
         }
    };
    this.cliqueBotoes = function(){
        document.addEventListener('click', (e) => {
            const target = e.target
            if(target.classList.contains('btn-num')){
                let num = target.innerHTML
                if(calculadora.validaNum(num)){
                    this.setDisplay(num)
                    calculadora.setNumeros(num)
                }
            }
            
            if(target.classList.contains('btn-operador')){
                if(calculadora.validaOperador(target.innerHTML)){
                    this.setDisplay(target.innerHTML)
                }
            }
        
            if(target.classList.contains('btn-eql')){
                let resultado = calculadora.calcula()
                this.setDisplay('')
                this.setDisplay(resultado)
            }

            if(target.classList.contains('btn-clear')){
                this.clearDisplay()
            }

            if(target.classList.contains('btn-delete')){
                this.apagaDisplay()
            }

            if(target.classList.contains('btn-point')){
                this.addPonto()
            }
        })
    };
    this.iniciar = function(){
        this.cliqueBotoes()
    };
}

// console.log(new Calculadora())
const calculadora = new Calculadora();
calculadora.iniciar()