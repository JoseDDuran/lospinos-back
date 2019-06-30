const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const moment = require('moment');
const _ = require('lodash');

async function agregarProforma(req,res){
  const { idEstadoBoletaHabitacion, nombre, documentoIdentidad } = req.body; 
  const { db } = req.app;
  try {
    const boletaHabitacion = await (db('boletaHabitacion').insert({
        idEstadoBoletaHabitacion,
        nombre,
        documentoIdentidad,
        dias
    }));
    
    const fechaFin = 
    await db('boletaHabitacion').update({

    })

    if(boletaHabitacion.length === 0){
        return res.status(400).json({ mensaje: 'Error al crear proforma'});
    }
    return res.json({ mensaje: 'Proforma creada correctamente', id:boletaHabitacion[0] });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function listarProforma(req,res){
  const { idBoletaHabitacion } = req.body; 
  const { db } = req.app;
  try {
    const boletaHabitacion = await db.select('*').from('boletaHabitacion')
      .where('idBoletaHabitacion', idBoletaHabitacion );
    return res.json(boletaHabitacion);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

async function guardarProforma(req, res) {
  const { monto, dias, documentoIdentidad, nombre, habitaciones } = req.body; 
  const { db } = req.app;
  try {
    const proforma = await db('proforma').insert({
      nombre,
      monto,
      dias,
      documentoIdentidad,
    });
  
    const detalleProforma = habitaciones.map(hab => {
      return {
        idHabitacion: hab.idHabitacion,
        idProforma: proforma[0],
      }
    });

    db.transaction((trx) => {
      db.insert(detalleProforma)
        .into('detalleProforma')
        .transacting(trx)
        .then(trx.commit)
        .catch(trx.rollback);
    })
      .then((inserts) => {
        return res.json({ message: 'Proforma creada correctamente' , status: 200, idProforma: proforma[0] });
      })
      .catch((error) => {
        return res.json({ message: 'Error al crear la proforma', status: 400});
      });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

async function agregarProforma(req,res){
  const { idEstadoBoletaHabitacion, nombre, documentoIdentidad } = req.body; 
  const { db } = req.app;
  try {
    const boletaHabitacion = await (db('boletaHabitacion').insert({
        idEstadoBoletaHabitacion,
        nombre,
        documentoIdentidad,
        dias
    }));
    
    const fechaFin = 
    await db('boletaHabitacion').update({

    })

    if(boletaHabitacion.length === 0){
        return res.status(400).json({ mensaje: 'Error al crear proforma'});
    }
    return res.json({ mensaje: 'Proforma creada correctamente', id:boletaHabitacion[0] });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function listarProforma(req,res){
  const { idBoletaHabitacion } = req.body; 
  const { db } = req.app;
  try {
    const boletaHabitacion = await db.select('*').from('boletaHabitacion')
      .where('idBoletaHabitacion', idBoletaHabitacion );
    return res.json(boletaHabitacion);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

async function anularProforma(req, res) {
  const { id } = req.params; 
  const { db } = req.app;
  try {
    
    const proforma = await db.first('*').from('proforma')
      .where('idProforma', id)
      .where('estado', true);
  
    const detalleProforma = habitaciones.map(hab => {
      return {
        idHabitacion: hab.idHabitacion,
        idProforma: proforma[0],
      }
    });

    db.transaction((trx) => {
      db.insert(detalleProforma)
        .into('detalleProforma')
        .transacting(trx)
        .then(trx.commit)
        .catch(trx.rollback);
    })
      .then((inserts) => {
        return res.json({ message: 'Proforma creada correctamente' , status: 200, idProforma: proforma[0] });
      })
      .catch((error) => {
        return res.json({ message: 'Error al crear la proforma', status: 400});
      });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

module.exports = {
    guardarProforma,
};