const { argv } = require('./config/yargs');

const porHacer = require('./por-hacer/por-hacer');


console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        
        if (argv.c) {
            let terminados = listado.filter(tareas => tareas.completado === true);
            for (let tarea of terminados) {
                console.log('========Por Hacer====='.green);
                console.log(tarea.desc);
                console.log('Estado:', tarea.completado);
                console.log('======================'.green);
            }
        }else{
            for (let tarea of listado) {
                console.log('========Por Hacer====='.green);
                console.log(tarea.desc);
                console.log('Estado:', tarea.completado);
                console.log('======================'.green);
            }
        } 
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.d, argv.c)
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.d);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}