// variaveis e constantes
const timer = document.querySelector('#timer')
const iniciar = document.querySelector('#iniciar')
const atual = document.querySelector('#atual')
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')
let interval;
let segundos = 0;

// Funções
const getHoraAtual = () => {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const getHoraTimer = () => {
    return segundos++
}

const atualizaTimer = (tipoTimer) => {
    if(tipoTimer == 'atual'){
        timer.innerHTML = getHoraAtual()
    }
    if(tipoTimer == 'iniciar'){
        let horaTimer = getHoraTimer()
        timer.innerHTML = formataSegundos(horaTimer)
    }
}

const formataSegundos = (segundos) =>{
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const clearTimer = () => {
    timer.innerHTML = '00:00:00'
    segundos = 0;
}


// Eventos
atual.addEventListener('click', function(){
    interval = setInterval(function(){
        atualizaTimer('atual')
    }, 1000)
})

iniciar.addEventListener('click', function(){
    interval = setInterval(function(){
        atualizaTimer('iniciar')
    }, 1000)
})


pausar.addEventListener('click', function(){
    clearInterval(interval)
})

zerar.addEventListener('click', function(){
    clearTimer()
})
