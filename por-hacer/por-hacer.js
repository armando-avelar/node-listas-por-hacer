const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }
    // console.log(listadoPorHacer);
}

const crear = (desc) => {

    cargarDB();

    let porHacer = {
        desc,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return listadoPorHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.desc === descripcion);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (desc) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.desc === desc);
    
    if(index >= 0){
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}