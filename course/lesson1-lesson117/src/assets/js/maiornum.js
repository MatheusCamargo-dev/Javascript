function maiorNum(arrayNum){
    var maior = 0;
    for (let num of arrayNum){
        if(num > maior){
            maior = num;
        }
    }
    return maior
}

const numeros = [1,2,3,4,5,6,99,7,8,9];

console.log(maiorNum(numeros))
// log 99

