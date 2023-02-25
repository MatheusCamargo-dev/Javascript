// a Função vai procurar a variavel em escopo léxico

const nome = 'Luiz'

function falaNome(){
    console.log(nome) //luiz
}

function execFalaNome(){
    const nome = 'Otavio'
    falaNome()
}

execFalaNome()