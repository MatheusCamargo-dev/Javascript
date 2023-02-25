const print = (...string) => console.log(...string);

function Person(name, last_name, age){
    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.getFullName = () => `origem`;
    Person.prototype.getFullName = () => `${this.name} ${this.last_name}`
}

const person = new Person('Sanji','Vinsmoke', 19)
const date = new Date()
console.dir(person)
console.dir(date)