

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias:'listar',
        type: 'boolean',
        demandOption : false,
        default: false,
        describe: 'Muestra la tabla en consola'

    })
    .option('a',{
        alias: 'amount',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Cantidad de numeros a generar'

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('La base tiene que ser un número');
        }
        return true;
    })
    .argv;

module.exports = argv;
