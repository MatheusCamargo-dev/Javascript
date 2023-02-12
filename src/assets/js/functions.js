// Declaração de função (Function hoisting)
hoisting()
function hoisting(){
    console.log('Hello World!')
};

// First-class objects (Objetos de primeira classe) (todas são tratadas com obj first-class)
const firstClass = function() {
    console.log('Objeto de primeira classe.')
};
firstClass()

// Arrow function
const arrowFunction = () => {
    console.log('Arrow function!')
}
arrowFunction()

// Funções dentro de um objeto

const obj = {
    hoisting: function (){
        console.log('Hello World!')
    },
    arrowFunction: () => {
        console.log('Objeto de primeira classe.')
    },
    newFormat(){
        console.log('Novo formato de função')
    }
}

obj.newFormat()