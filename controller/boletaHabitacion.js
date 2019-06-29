const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const _ = require('lodash');

async function agregarProforma(req,res){
    const { idEstadoBoletaHabitacion,nombre,documentoIdentidad } = req.body; 
    const { db } = req.app;
    try {
        const boletaHabitacion = await (db('boletaHabitacion').insert({
            idEstadoBoletaHabitacion,
            nombre,
            documentoIdentidad
        }));
        
        if(boletaHabitacion.length === 0){
            return res.status(400).json({ mensaje: 'Error al crear proforma'});
          }
        return res.json({ mensaje: 'Proforma creada correctamente '});
      } catch (error) {
        const errorMessage = handleError(error);
        return res.json(errorMessage);
      }
}

module.exports = {
    agregarProforma,
};