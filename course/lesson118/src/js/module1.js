const name = 'Sanji';
const last_name = 'Vinsmoke';
const age = 21;

const sum = (x,y) => {
    return x+y
}  

export { name, last_name, age, sum as vanilla};
export default class Person {
    constructor(name, last_name){
        this.name = name;
        this.last_name = last_name;
    }
}