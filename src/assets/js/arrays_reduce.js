// reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 10, 11, 15, 22, 28];

const tot = numeros.reduce(function(acumulador, valor, i, array){
    acumulador += valor;
    return acumulador
}, 0)

const numPares = numeros.reduce(function(acumulador, valor, i, array){
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, [])

const somaPares = numeros.reduce(function(acumulador, valor, i, array){
    if (valor % 2 === 0) acumulador += valor;
    return acumulador
}, 0)


const dobroNum = numeros.reduce((acumulador, valor, i, array) => {
    acumulador.push(valor * 2);
   return acumulador 
}, []);

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
    { nome: 'Julia', idade: 7},
    { nome: 'Julio', idade: 17},
]

const maiorPessoa = pessoas.reduce((acumulador, valor) => { 
    if (valor.idade > acumulador) acumulador = valor.idade;
    return acumulador
}, 0);

console.log(maiorPessoa)
