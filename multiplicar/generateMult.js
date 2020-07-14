const fs = require('fs');
const colors = require('colors');

let generateFile = (base, limit) => {
    console.log('====================='.green);
    console.log(`== TABLA DE ${base}==`.green);
    console.log('====================='.green);
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El parámetro: '${base}' no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limit; i++)
            data += `${base} * ${i}: ${i*base}\n`;
        let name = `${base}.txt`.blue;
        fs.writeFile(`Tablas/Archive${base}.txt`, data, (err) => {
            if (err)
                reject("It was not possible create the file")
            else
                resolve(`The file: ${name} has been saved!`);
        });
    });

}

let showList = (base, limit = 10) => {
    console.log('====================='.blue);
    console.log(`== TABLA DE ${base}==`.blue);
    console.log('====================='.blue);
    for (let i = 1; i <= limit; i++)
        console.log(`${base} * ${i}= ${base*i}`);
}

module.exports = {
    generateFile,
    showList
}