// For in -> lê os indices ou chaves

const frutas = ['Pera', 'Maçã', 'Uva'];

for(let i in frutas){
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Camargo',
    idade: 19,
}

for(let dado in pessoa){
    console.log(pessoa[dado])
}