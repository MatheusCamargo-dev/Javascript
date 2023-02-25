
// arguments em hosting function
function argumentos(){
    console.log(arguments[0]) //Valor
    console.log(arguments[1]) //1
}
argumentos('Valor', 1, 2, 3, 4, 5)

function somaArgumentos(){
    if(arguments.length > 0){
        let soma = 0;
        for (let argumento of arguments){
            soma += argumento
        }
        console.log(soma) // 55
    }
}

somaArgumentos(1,2,3,4,5,6,7,8,9,10)

function defaultValues(a, b = 10, c = 10){
    console.log(a + b + c)
}

defaultValues(10, undefined, 10) //30 undefined assume o valor padrão

function desestruturacaoObj({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade) 
}


// desestruturação de objeto
desestruturacaoObj({nome:'Desestruturação', sobrenome:'Objeto', idade:18}) //Desestruturação Objeto 18

function desestruturacaoArray([nome, sobrenome, idade]){
    console.log(nome, sobrenome, idade) 
}


// desestruturação de Array 
desestruturacaoArray(['Desestruturação','Array',81]) //Desestruturação Array 81

// Utilizando Rest
function calcula(operador, acumulador, ...numeros){
    for(let numero of numeros){
        // console.log(numero)
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador)
}

calcula('*', 1, 20,30,40,50)