function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}
var rand = 0;
var cont = 0;
// console.log(rand)
while(rand !== 10){
    rand = random(1,100)
    console.log(rand)
    cont++;
}
// console.log(rand)
console.log(`quantidade de vezes do laço while: ${cont}`)

rand = 10;
cont = 0;
do{
    rand = random(1,100)
    cont++;
}while(rand !== 10);

console.log(`quantidade de vezes do laço do while: ${cont}`)
