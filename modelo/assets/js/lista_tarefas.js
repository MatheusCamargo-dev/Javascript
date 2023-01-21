
const addTarefa = document.querySelector('#addTarefa');
const tarefa = document.querySelector('#tarefa');
const listaTarefas = document.querySelector("#lista-tarefas");
const excluiTarefa = document.querySelector(".exclui-tarefa")

const criaLi = (tarefa) => {
    let li = document.createElement('li')
    li.id = tarefa
    return li
}

const criaSpan = (tarefa) => {
    let span = document.createElement('span')
    span.innerHTML = tarefa
    return span
}

const criaBtnApagar = (tarefa) => {
    let btnApagar = document.createElement('input')
    btnApagar.value = 'Apagar'
    btnApagar.type = 'button'
    btnApagar.className = 'excluiTarefa ml-10'
    btnApagar.tarefa = tarefa
    btnApagar.addEventListener('click', function(){
        apagarTarefa(this);
    })
    return btnApagar
}

const validaTarefa = () => {
    if(tarefa.value != ''){
        return true
    }else{
        return window.alert('informe uma tarefa!')
    }
}

const getTarefaValue = () => {
    let tarefaValue = tarefa.value
    return tarefaValue
}

const adicionaTarefa = (li, btnApagar, span) => {
    li.appendChild(span)
    li.appendChild(btnApagar)
    listaTarefas.appendChild(li)
}

const criaTarefa = (tarefa) => {
    let li = criaLi(tarefa)
    let btnApagar = criaBtnApagar(tarefa)
    let span = criaSpan(tarefa)    
    adicionaTarefa(li, btnApagar, span)
    atualizaTarefaJSON()
    limpaInputTarefa()
}

const atualizaTarefaJSON = () => {
    let arrayTarefas = listaTarefas.querySelectorAll('li')
    let listaDeTarefas = []
    for(let tarefa of arrayTarefas){
        listaDeTarefas.push(tarefa.innerText.trim())
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

const getTarefasLocalStorage = () => {
    let tarefas = localStorage.getItem('tarefas');
    let listaDeTarefas = tarefas = JSON.parse(tarefas);
    return listaDeTarefas
}

const listaTarefasLocalStorage = () => {
    let listaDeTarefas = getTarefasLocalStorage()
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }

}
const apagarTarefa = (tarefa) => {
    console.log(tarefa.tarefa)
    document.getElementById(tarefa.tarefa).remove()
    atualizaTarefaJSON()
}

const limpaInputTarefa = () => {
    tarefa.value = ''
    tarefa.focus()
}

addTarefa.addEventListener('click', function(){
    if(validaTarefa()){
        let tarefaValue = getTarefaValue()
        criaTarefa(tarefaValue)
    }
})

tarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(validaTarefa()){
            let tarefaValue = getTarefaValue()
            criaTarefa(tarefaValue)
        }
    }
})

listaTarefasLocalStorage()

