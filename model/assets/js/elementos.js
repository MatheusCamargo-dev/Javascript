const elements = [
    {tag: 'p', texto: 'Qualquer texto'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');
for (let i = 0; i < elements.length; i++){
    let {tag, texto} = elements[i]
    let element = document.createElement(tag);
    element.innerText = texto;
    div.appendChild(element)
    
}

container.appendChild(div)