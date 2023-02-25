// Retorne true se a imagem estiver no modo paisagem.

const _URL = window.URL || window.webkitURL;

const inputImg = document.querySelector('#paisagem');

const validaPaisagem = (arquivo) => {
    var img;
    img = new Image();
    
    var objectUrl = _URL.createObjectURL(arquivo);
    
    img.onload = function () {
        largura = this.width
        altura = this.height
        if(largura > altura){
            alert(`largura: ${largura} altura: ${altura}
            *IMAGEM ESTÁ NO MODO PAISAGEM*`);
        }else{
            alert(`largura: ${largura} altura: ${altura}
            *IMAGEM NÃO ESTÁ NO MODO PAISAGEM*`);
        }
        
        _URL.revokeObjectURL(objectUrl);
    };
    img.src = objectUrl;
}

inputImg.addEventListener('change', function(){
    let arquivo = this.files[0]
    validaPaisagem(arquivo)
})