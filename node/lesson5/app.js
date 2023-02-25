const path = require('path');
const writeFile = require('./modules/writeFile');
const readFile = require('./modules/readFile');


const pathFile = path.resolve(__dirname, 'test.json');
const mugiwaras = [
    {name: 'Luffy'},
    {name: 'Zoro'},
    {name: 'Sanji'},
    {name: 'Usopp'},
    {name: 'Nami'},
    {name: 'Robin'},
    {name: 'Chopper'},
    {name: 'Franky'},
    {name: 'Brook'},
]

const json = JSON.stringify(mugiwaras, '',2);

// writeFile(pathFile, json)

const createObjFromJson = async (pathFile) => {
    let data = await readFile(pathFile);
    data = JSON.parse(data);
    data.forEach(val => console.log(val.name))
    return data;
}

createObjFromJson(pathFile)

