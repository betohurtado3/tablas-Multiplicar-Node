///requiere
///Proyecto propio de node
//const fs = require('express'); paquetes no nativos de node de otras personas
///const fs = require('./fs'); paquetes que nosotros mismso escribimos
const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo Creado: ', colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}


console.log(argv);


//let argv2 = process.argv;
//console.log("Limite", argv.limite);
//let parametro = argv[2];
//let base = parametro.split('=')[1]