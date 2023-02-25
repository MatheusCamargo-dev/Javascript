function* generator(){
    yield 'a1';
    yield 'b2';
    yield 'c3';
}

const g1 = generator();
for (let valor of g1){
    console.log(valor)
}

function* generatorNum(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

const num = generatorNum();
console.log(num.next().value)
console.log(num.next().value)
console.log(num.next().value)

function* generator012(){
    yield 0;
    yield 1;
    yield 2;
}

function* generator345(){
    yield* generator012();
    yield 3;
    yield 4;
    yield 5;
}

const sequencia = generator345();
console.log(sequencia.next())
console.log(sequencia.next())
console.log(sequencia.next())

