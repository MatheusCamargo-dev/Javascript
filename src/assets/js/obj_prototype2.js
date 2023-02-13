// const print = (...string) => console.log(...string);

const objA = {
    keyA: 'A'
    
}

const objB = {
    keyB: 'B'
}

const objC = new Object();
objC.keyC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

// print(objC.keyA)