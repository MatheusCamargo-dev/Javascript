
// DIFF slice e splice
// slice retorna o valor sem att o array
// splice atualiza o array e retorna o valor


const nomes = ['Maria','João', 'Eduardo', 'Gabriel', 'Júlia'];
// splice(indice, delete, add ele1, add ele2, add ele3);

// pop (remove o ultimo elemento)
nomes.splice(-1, 1) //remove e retorna um array do(s) valor(es) removido(s)
console.log(nomes)

// shift (remove o primeiro elemento)
nomes.splice(0, 1)
console.log(nomes)

// push (add no ultimo elemento)
nomes.splice(nomes.length, 0,'Matheus')
console.log(nomes)

// unshift (add no primeiro elemento)
nomes.splice(0, 0, 'Otávio')
console.log(nomes)
// nomes.splice(-1, 0, 'Gustavo','Julia') //iniciando pelo ultimo elemento, não remove e adiciona o ele1 e ele2