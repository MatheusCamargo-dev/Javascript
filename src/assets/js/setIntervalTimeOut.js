const getHoraAtual = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
// recebe uma função e executa a cada intervalo
const interval = setInterval(function(){
    console.log(getHoraAtual())
}, 1000) 

// executa a função após o timeout
setTimeout(function(){
    clearInterval(interval)
    console.log('Acabou')
}, 10000)

setTimeout(function(){
    console.log('Se passou 5 segundos')
}, 5000)