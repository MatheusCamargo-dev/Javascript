$(function (){
    $('.form').submit(function (e){

        e.preventDefault()
        var peso = $('#peso').val();
        var altura = $('#altura').val();
        var imc = peso/(altura * 2)
        imc = imc.toFixed(2)
        var h1 = document.createElement('h1')
        h1.innerHTML = `O SEU IMC É ${imc}`
        var html = ''
        var p = document.createElement('p')

        if (peso > 0 && altura > 0 && peso < 700 && altura < 4){
           
            if(imc < 18.5){
                p.innerHTML = 'Você está abaixo do peso'
                p.classList.add('warn')
            }else if(imc <= 24.9){
                p.innerHTML = 'Você está com peso normal'
                p.classList.add('sucess')
            }else if(imc <= 29.9){
                p.innerHTML = 'Você está com sobrepeso'
                p.classList.add('warn')

            }else if(imc <= 34.9){
                p.innerHTML = 'Você está com obesidade grau 1'
                p.classList.add('warn')

            }else if(imc <= 39.9){
                p.innerHTML = 'Você está com obesidade grau 2'
                p.classList.add('warn')

            }else if(imc <= 600){
                p.innerHTML = 'Você está com obesidade grau 3'
                p.classList.add('warn')
            }else{
                p.innerHTML = 'Dados invalídos'
            }
        }else{
            p.innerHTML = 'Dados invalídos!'
        }
    
        const res = document.querySelector('.resultado')
        console.log(res)
        res.innerHTML = ''
        res.appendChild(h1)
        res.appendChild(p)
    })
})