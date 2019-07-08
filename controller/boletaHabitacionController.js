const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const moment = require('moment');
const _ = require('lodash');

async function buscarBoletaConsumoYDetalle(req, res){
  const { db } = req.app;
  const { documentoIdentidad } = req.body;
  try {
      const boletaHabitacion = await (db.first('db.idBoletaHabitacion', 'hu.nombres', 'hu.apellidos',
       'hu.documentoIdentidad').from('detalleBoletaHabitacion AS dbh')
      .innerJoin('huesped AS hu', 'hu.idHuesped', 'dbh.idHuesped')
      .innerJoin('boletaHabitacion AS db', 'db.idBoletaHabitacion', 'dbh.idBoletaHabitacion')
      .where('hu.documentoIdentidad', documentoIdentidad)
      .where('dbh.representante', true)
      .where('db.idEstadoBoletaHabitacion', 1)) || {};

      //console.log(boletaHabitacion)
      if(_.isEmpty(boletaHabitacion)){
          return res.json({ mensaje: 'No hay boleta generada con este documento de identidad', estado: 200 })
      }

      const detalleBoletaConsumo = await (db.select('bc.idBoletaConsumo', 'dbc.descripcion',
         'dbc.monto').from('boletaConsumo AS bc')
        .innerJoin('detalleBoletaConsumo AS dbc', 'dbc.idBoletaConsumo', 'bc.idBoletaConsumo')
        .where('bc.idBoletaHabitacion', boletaHabitacion.idBoletaHabitacion)) || [];

      if(detalleBoletaConsumo.length === 0){
        const boletaConsumo = await db('boletaConsumo').insert({
          idBoletaHabitacion: boletaHabitacion.idBoletaHabitacion
        });
      }
      const representante = boletaHabitacion.nombres +' '+ boletaHabitacion.apellidos;
      return res.json({ detalleBoletaConsumo, representante, idBoletaConsumo: boletaHabitacion.idBoletaHabitacion, estado: 200 });
  } catch(error){
      const errorMessage = handleError(error);
      return res.json({errorMessage, estado: 500});
  }
}

async function buscarBoletaHabitacion(req, res){
  const { db } = req.app;
  const { documentoIdentidad } = req.params;
  try {
      const boletaHabitacion = await (db.first('db.idBoletaHabitacion', 'hu.nombres', 'hu.apellidos', 'hu.documentoIdentidad').from('detalleBoletaHabitacion AS dbh')
      .innerJoin('huesped AS hu', 'hu.idHuesped', 'dbh.idHuesped')
      .innerJoin('boletaHabitacion AS db', 'db.idBoletaHabitacion', 'dbh.idBoletaHabitacion')
      .where('hu.documentoIdentidad', documentoIdentidad)
      .where('dbh.representante', true)
      .where('db.idEstadoBoletaHabitacion', 1)) || {};

      //console.log(boletaHabitacion)
      if(_.isEmpty(boletaHabitacion)){
          return res.json({ mensaje: 'No hay boleta actual generada con este documento de identidad', estado: 200 })
      }

      return res.json({ boletaHabitacion, estado: 200 });
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
      .where('idEstadoBoletaHabitacion', 1)) || {};

    if(_.isEmpty(proforma)){
      return res.json({ mensaje:'Esta boleta no existe', estado: 400})
    }

    await db('boletaHabitacion')
      .update({
        idEstadoBoletaHabitacion: 2
      }).where('idBoletaHabitacion', id)

    const habitaciones = await (db.select('idHabitacion').from('detalleProforma').where('idProforma', id)) || {};
      await Promise.all(habitaciones.map(async (hab) => {
        await db('habitacion').update({
          estadoHabitacion: 'En limpieza'
        }).where('idHabitacion', hab.idHabitacion);
      }));
    
    return res.json({ mensaje: 'Boleta clausurada correctamente', estado: 200})
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({ errorMessage, estado: 500});
  }
}

module.exports = {
    buscarBoletaHabitacion,
    finalizarBoletaHabitacion,
    buscarBoletaConsumoYDetalle,
};