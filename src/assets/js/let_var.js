// let nome = 'a' não é possivel redeclarar let no mesmo escopo
let nome = 'Matheus'

// var é redeclarada no mesmo escopo
var sobrenome = 'Camargo'
var sobrenome = 'Camargo'

if(true){
    let nome = 'Math' // criando novamente let nome
    var sobrenome = 'Camargo.' 
}


console.log(nome, sobrenome) // Matheus Camargo.

const falaNome = () => {
    var sobrenome = 'Camar.' //criada novamente no escopo da função
    console.log(sobrenome) // Camar.

    if(true){
        var nomeCompleto = 'Matheus Camargo'
        let foraDoBloco = 'invalido'
    }

    console.log(nomeCompleto) // -> não gera erro
    // console.log(foraDoBloco) -> gera erro
}
falaNome()
console.log(sobrenome) //Camargo.