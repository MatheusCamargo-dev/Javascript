const numeros = [1,2,3,4,5,6,7,8,9,10];
// mostre somente os numeros impares pulando os pares.

for (let num of numeros){
    if(num % 2 == 0){
        continue;
    }
    console.log(num)

}
console.log('#########')
// quando for 7 parar
for(let num of numeros){
    console.log(num)
    if(num == 7){
        break;
    }
}