// import defaultExport from "module-name";
// import * as name from "module-name";
// import { export } from "module-name";
// import { export as alias } from "module-name";
// import { export1 , export2 } from "module-name";
// import { foo , bar } from "module-name/path/to/specific/un-exported/file";
// import { export1 , export2 as alias2 , [...] } from "module-name";
// import defaultExport, { export [ , [...] ] } from "module-name";
// import defaultExport, * as name from "module-name";
// import "module-name"; var promise = import("module-name"); // This is a stage 3 proposal.

import Person, {name as nameModule, last_name, age, vanilla} from './module1';
const print = (...args) => console.log(...args);

const name = 'Zoro';

const mugiwara = new Person('Nico', 'Robin');

print(mugiwara);

print(nameModule, last_name, age, vanilla(5,5))
