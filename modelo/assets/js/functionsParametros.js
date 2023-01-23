
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

function desestruturacao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade) 
}


// desestruturação de objeto
desestruturacao({nome:'nome', sobrenome:'sobrenome', idade:18}) //nome sobrenome 18