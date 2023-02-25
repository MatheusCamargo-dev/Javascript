// valores por referencia

const valores = ['1231541', '4423424', '86738173'];
const refer = valores;
delete valores[2]; // empty item
console.log(refer)

// construtor
const letras = new Array('a','b','c')
// spread operator
const spread = [...letras];
const shift = letras.shift(); //shift remove e retorna o primeiro indice do array
const pop = letras.pop(); //pop remove e retorna o ultimo indice do array
letras.push('d') //push adiciona um elemento no final do array
letras.unshift('f') //unshift adiciona um elemento no começo do array reorganizando os demais indices 
console.log(letras, shift, pop)
console.log(spread)

const nomes = ['Eduardo','Maria', 'Joana', 'Wallace', 'Rosana'];
console.log(nomes.slice(1,4)) //pega o indice x até o indice y (função só retorna o valor sem atualizar)
console.log(nomes.slice(0,-1)) // remove o ultimo elemento

const nome = 'Maria Eduarda';
console.log(nome.split(' ')) //divide o array por um valor
console.log(nome.join(' ')) //retorna a junção dos elementos do array por um valor
// console.log(nome)