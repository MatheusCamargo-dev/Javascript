// import * as module1 from './module1';
import Person, {name as nameModule, last_name, age, vanilla} from './module1';
const print = (...args) => console.log(...args);

const name = 'Zoro';

const mugiwara = new Person('Nico', 'Robin');

print(mugiwara);

print(nameModule, last_name, age, vanilla(5,5))
