function novaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        peso: 90,
        altura: 1.90,
        // Getter
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor = ''){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            // this.sobrenome = 
        },
        get imc(){
            const i = this.peso / (this.altura ** 2);
            return i.toFixed(2)
        },
        fala(assunto = '') {
            return `${this.nomeCompleto}: ${assunto}`;
        }
    };
}

const pessoa = novaPessoa('George','Washington');

// console.log(pessoa.nomeCompleto)
pessoa.nomeCompleto = 'William Henry Harrison'
// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)
// console.log(pessoa.nomeCompleto)
console.log(pessoa.fala('Olá!'))