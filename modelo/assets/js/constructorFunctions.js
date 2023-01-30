// Construtor

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    const UID = 123456;

    this.alert = function(){
        console.log(this.nome +': !!!');
    }
}

const p1 = new Pessoa('x', 'y')

// console.log(p1.nome, p1.sobrenome)

p1.alert()