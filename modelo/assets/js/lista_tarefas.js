
const addTarefa = document.querySelector('#addTarefa');
const tarefa = document.querySelector('#tarefa');
const listaTarefas = document.querySelector("#lista-tarefas");
const excluiTarefa = document.querySelector(".exclui-tarefa")

const criaTarefa = (tarefa) => {
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        let span = document.createElement('span')
        let btnApagar = document.createElement('input')
        ul.id = tarefa
        btnApagar.value = 'Apagar'
        btnApagar.className = 'excluiTarefa ml-10'
        btnApagar.type = 'button'
        btnApagar.setAttributeNode = 'tarefa'
        btnApagar.tarefa = tarefa
        btnApagar.addEventListener('click', function(){
            apagarTarefa(this);
        })
        ul.appendChild(li)
        li.appendChild(span)
        li.appendChild(btnApagar)
        span.innerHTML = tarefa
        listaTarefas.appendChild(ul)
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



