// divisivel por 3 = Fizz
// divisivel por 5 = Buzz
// divisivel por 5 e 3 = FizzBuzz
// não divisivel por 5 e 3 = Retorna o proprio numero
const random = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const FizzBuzz = (num) => {
    let retorno
    if(num % 3 == 0){
        retorno =  'Fizz'
    }else if(num % 5 == 0){
        retorno = 'Buzz'
    }else if(!(num % 5 == 0) && !(num % 3 == 0)){
        retorno = num
    }else if((num % 5 == 0) && (num % 3 == 0)){
        retorno = 'FizzBuzz';
    }

    return {dado: retorno, numero: num}
}
var cont = 0;
while (cont < random(1,10)){
    const {dado: resultado, numero} = FizzBuzz(random(1,10))
    console.log(numero, resultado)
    cont++;
}


