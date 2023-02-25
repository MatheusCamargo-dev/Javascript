const fs = require('fs').promises;
module.exports = (pathFile, json) =>{
    // w: delete data and write data
    // a: append data in file
    fs.writeFile(pathFile, json, { flag: 'w', encoding: 'utf8'} )
}


