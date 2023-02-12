const print = (...string) => console.log(...string);

const a1 = [10, 20, 30];
let tot=0;
a1.forEach((valor) => 
    tot+= valor
);

print(tot)

