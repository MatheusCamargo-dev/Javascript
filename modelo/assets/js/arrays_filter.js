const num = [5, 50, 80, 1, 2, 3, 5, 10, 11, 15, 22, 28];

const numFilter = num.filter(valor =>  valor > 10);
console.log(numFilter)

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

const pessoaMaioridade = pessoas.filter(function(pessoa){
    return pessoa.idade > 18;
})
console.log(pessoaMaioridade)

const pessoas5Letras = pessoas.filter(function(pessoa){
    return pessoa.nome.length > 5;
})
console.log(pessoas5Letras)

const nomesTerminaComA = pessoas.filter(function(pessoa){
    return pessoa.nome.toLocaleLowerCase().endsWith('a')
})

console.log(nomesTerminaComA)