const texto = document.querySelector('.texto')
const paragrafos = texto.querySelectorAll('p')
const bodyStyles = getComputedStyle(document.body)
const backgroundColor = bodyStyles.backgroundColor;


for (let p of paragrafos){
    p.style.backgroundColor = backgroundColor
    p.style.color = 'white'
}
