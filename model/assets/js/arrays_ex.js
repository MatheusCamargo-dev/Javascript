// retorne a soma do dobro de todos os pares

const nums = [5, 2, 4,6, 9];

const result = nums.filter( num => num % 2 == 0).map( num => num * 2).reduce((ac, num) => ac += num, 0)

console.log(result)