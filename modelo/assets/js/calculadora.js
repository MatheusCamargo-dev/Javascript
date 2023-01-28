const calculadora = {
    operador,
    calcula: function(operador, valor1, valor2){
        let resultado;
        if (operador === '+') resultado = (valor1 + valor2);
        if (operador === '-') resultado = (valor1 - valor2);
        if (operador === '*') resultado = (valor1 * valor2);
        if (operador === '/') resultado = (valor1 / valor2);
        return resultado
    }
}

const operadores = document.querySelectorAll('.operador');
var operador;
console.log(operadores)
for(let op of operadores){
   op.addEventListener('click', function(){
      calculadora.operador = this.innerHTML
      console.log(calculadora.operador)
   })
}
