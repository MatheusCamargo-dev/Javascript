const print = (...string) => console.log(...string);

const person = {
    name: 'Luffy',
    last_name: 'Monkey D.',
    age: 18
}

person.speak = function(string) { print(`${this.name}: ${string}`) }
person.getDateOfBirth = function () { 
    const currentDate = new Date();
    return currentDate.getFullYear() - this.age
};
person.speak(person.getDateOfBirth())


// new object by object constructor
const person2 = new Object();
person2.name = 'Sanji'
person2.last_name = 'Vinsmoke'


// object model by factory function or constructor function

// factory function:
function newPerson(name, last_name, age){
    return{
        name,
        last_name,
        age,
        get fullName(){ return name+' '+last_name}
    }
}

const robin = newPerson('Nico', 'Robin', 22);
print(robin.fullName)

// constructor function

function Person(name, last_name, age){
    this.name = name;
    this.last_name = last_name;
    this.age = age;

    Object.freeze(this) //this function freeze the object for don't change the object states 
}

const chopper = new Person('Chopper', 'Tony Tony', 15)
chopper.age = 20
print(chopper) //chopper age is 15 (object freeze)