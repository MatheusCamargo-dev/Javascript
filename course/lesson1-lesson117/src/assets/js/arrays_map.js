const num = [5, 50, 80, 1, 2, 3, 5, 10, 11, 15, 22, 28];

const doubleNum = num.map( num => num * 2);

console.log(doubleNum)

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

const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes)
const idades = pessoas.map(pessoa => ({idade: pessoa.idade}));
console.log(idades)

const ids = pessoas.map((pessoa, id) => ({id: id, pessoa: pessoa.nome, idade: pessoa.idade}))
console.log(ids)