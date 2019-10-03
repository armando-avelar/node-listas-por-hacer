
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    defautl: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', "Crear un elemento por hacer", { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('listar', 'Muestra los elementos por hacer', {completado})
    .command('borrar', 'Elimina un elemento de la lista', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}