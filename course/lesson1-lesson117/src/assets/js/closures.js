function testeClosure(){
    const clos = 'clousere'

    return function(){
        return clos;
    };
}

const f = testeClosure();

console.dir(f)