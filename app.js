// for(let i = 1; i<=10;i++){
//     console.log(`${ base } x ${ i } = ${ base*i }`)
// }


// const [,, arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');


const argv = require('./config/yargs');
require('colors');
const { crearArchivo } = require('./helpers/multiplicar');

console.log(process.argv);
console.log(argv);

crearArchivo(argv.base, argv.listar,argv.amount)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))
console.log('prueba')