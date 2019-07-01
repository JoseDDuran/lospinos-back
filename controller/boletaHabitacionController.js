const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const moment = require('moment');
const _ = require('lodash');

async function buscarBoletaHabitacion(req, res){
  const { db } = req.app;
  const { documentoIdentidad } = req.body;
  try {
      const boletaHabitacion = await (db.first('bh.idBoletaHabitacion', 'hu.nombres', 'hu.apellidos', 'hu.documentoIdentidad').from('detalleBoletaHabitacion AS dbh')
      .innerJoin('huesped AS hu', 'hu.idHuesped', 'dbh.idHuesped')
      .innerJoin('boletaHabitacion AS db', 'db.idBoletaHabitacion', 'dbh.idBoletaHabitacion')
      .where('hu.documentoIdentidad', documentoIdentidad)
      .where('dbh.representante', true)
      .where('bh.idEstadoBoletaHabitacion', 1)) || {};

      if(_.isEmpty(idBoletaHabitacion)){
          return res.json({ mensaje: 'No hay boleta generada con este documento de identidad', estado: 200 })
      }

      const detalleBoletaConsumo = await db.first('bc.idBoletaConsumo', 'dbc.descripcion',
         'dbc.monto').from('boletaConsumo AS bc')
        .innerJoin('detalleBoletaConsumo AS dbc', 'dbc.idBoletaConsumo', 'bc.idBoletaConsumo')
        .where('bc.idBoletaHabitacion', boletaHabitacion.idBoletaHabitacion)

      return res.json({ detalleBoletaConsumo, estado: 200 });
  } catch(error){
      const errorMessage = handleError(error);
      return res.json({errorMessage, estado: 500});
  }
}

async function finalizarBoletaHabitacion(req, res){
  const { id } = req.params; 
  const { db } = req.app;
  try {
    
    const proforma = await (db.first('*').from('boletaHabitacion')
      .where('idBoletaHabitacion', id)
      .where('estado', true)) || {};

    if(_.isEmpty(proforma)){
      return res.json({ mensaje:'Esta boleta no existe', estado: 400})
    }

    await db('boletaHabitacion')
      .update({
        estado: 2
      }).where('idProforma', id)
    
    return res.json({ mensaje: 'Boleta clausurada correctamente', estado: 200})
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

module.exports = {
    buscarBoletaHabitacion,
    finalizarBoletaHabitacion,
};