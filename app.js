//requieres
/**
 * replacing this code for a brief description
 */
/*
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multilpicar', {
        base: {
            demand: false,
            default: 2,
            alias: 'b'
        },
        limite: {
            demand: true,
            default: 10,
            alias: 'l'
        }
    })
    .command('crear', 'Imprime en consola la tabla de multilpicar', {
        base: {
            demand: false,
            default: 2,
            alias: 'b'
        },
        limite: {
            demand: true,
            default: 10,
            alias: 'l'
        }
    })
    .help()
    .argv;
    */
/*Shorter version*/
const argv = require('../03-bases-node/yargs').argv;
const { generateFile, showList } = require('./multiplicar/generateMult');
const { alias } = require('yargs');

let command = argv._.toString();
console.log("Base: " + argv.base);
switch (command) {
    case 'crear':
        console.log("Crear Archivo");
        generateFile(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        console.log("Listar valores");
        showList(argv.base, argv.limite)
        break;
    default:
        console.log("comando no reconocido");
        break;

}


let arg = process.argv;

if (arg.length > 2) {
    let arr = arg[2].split('= ')[1]

    console.log(`Valor: ${arr}`);
}