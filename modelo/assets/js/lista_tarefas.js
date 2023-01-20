
const addTarefa = document.querySelector('#addTarefa');
const tarefa = document.querySelector('#tarefa');
const listaTarefas = document.querySelector("#lista-tarefas");
const excluiTarefa = document.querySelector(".exclui-tarefa")

const criaLi = (tarefa) => {
    let li = document.createElement('li')
    li.id = tarefa
    return li
}

const criaSpan = () => {
    let span = document.createElement('span')
    return span
}

const criaBtnApagar = (tarefa) => {
    let btnApagar = document.createElement('input')
    btnApagar.tarefa = tarefa
    btnApagar.value = 'Apagar'
    btnApagar.type = 'button'
    btnApagar.className = 'excluiTarefa ml-10'
    btnApagar.setAttributeNode = 'tarefa'
    btnApagar.addEventListener('click', function(){
        apagarTarefa(this);
    })
    return btnApagar
}

const adicionaTarefa = (tarefa) => {
    listaTarefas.appendChild(tarefa)
}

const criaTarefa = (tarefa) => {
    let li = criaLi(tarefa)
    let btnApagar = criaBtnApagar(tarefa)
    let span = criaSpan()
    span.innerHTML = tarefa

    li.appendChild(span)
    li.appendChild(btnApagar)
    adicionaTarefa(li)
}

const apagarTarefa = (tarefa) => {
    document.getElementById(tarefa.tarefa).remove()
}

addTarefa.addEventListener('click', function(){
    if(tarefa.value != ''){
        let textoTarefa = tarefa.value
        criaTarefa(textoTarefa)
    }else{
        window.alert('informe uma tarefa!')
    }
})



