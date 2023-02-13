const print = (...string) => console.log(...string);


function newPerson(name, last_name){
    const protoPerson = { speak () { return `${this.name}: ...`}}
    
    return Object.create(protoPerson, {
        name: {value: name},
        last_name: {value: last_name}
    })
}

const p1 = newPerson('Sanji', 'Vinsmoke')
print(p1)
print(p1.speak())




const speak = {
    speak() {
        return `${this.name}: ...`
    }
}

// Mix-ins
const protoPerson2 = Object.assign({}, speak)
function newPerson2(name, last_name){
    return Object.create(protoPerson2, {
        name: {value: name},
        last_name: {value: last_name}
    })
}

const p2 = newPerson2('Sanji', 'Vinsmoke');
print(p2.speak())