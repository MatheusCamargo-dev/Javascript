$(function (){
    $(document).on('click', '#calcular', function(){
        var peso = $('#peso').val();
        var altura = $('#altura').val();

        var imc = peso/(altura * 2)
        imc = imc.toFixed(2)
        var html = `<h1>O SEU IMC É ${imc}</h1>`

        if(imc < 18.5){
            html += 'Você está abaixo do peso'
        }else if(imc <= 24.9){
            html += 'Você está com peso normal'
        }else if(imc <= 29.9){
            html += 'Você está com sobrepeso'
        }else if(imc <= 34.9){
            html += 'Você está com obesidade grau 1'
        }else if(imc <= 39.9){
            html += 'Você está com obesidade grau 2'
        }else{
            html += 'Você está com obesidade grau 3'
        }
        $('.resultado').html(html)
    })
})