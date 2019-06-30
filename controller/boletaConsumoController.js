const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const moment = require('moment');
const _ = require('lodash');

async function generarBoletaConsumo(req, res){
    const { db } = req.app;
    const { documentoIdentidad } = req.body;
    try {
        const idBoletaHabitacion = await (db.first('bh.idBoletaHabitacion').from('detalleBoletaHabitacion AS dbh')
            .innerJoin('huesped AS hu', 'hu.idHuesped', 'dbh.idHuesped')
            .innerJoin('boletaHabitacion AS db', 'db.idBoletaHabitacion', 'dbh.idBoletaHabitacion')
            .where('hu.documentoIdentidad', documentoIdentidad)
            .where('dbh.representante', true)) || {};

        if(idBoletaHabitacion.length === 0){

        }
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


async function anularProforma(req, res) {
  const { id } = req.params; 
  const { db } = req.app;
  try {
    
    const proforma = await db.first('*').from('proforma')
      .where('idProforma', id)
      .where('estado', true);

    if(proforma.length === 0){
      return res.json({ mensaje:'Esta proforma no existe', estado: 400})
    }
  
    await db('proforma')
      .update({
        estado: false
      }).where('idProforma', id)
    
    return res.json({ mensaje: 'Proforma anulada correctamente', estado: 200})
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

async function procesarProforma(req, res){
  const { id } = req.params; 
  const { db } = req.app;
  const { huespedes } = req.body;
  try {
    const proforma = await db.first('*').from('proforma')
      .where('idProforma', id)
      .where('estado', true);

    if(proforma.length === 0){
      return res.json({ mensaje: 'Esta proforma no existe', estado: 400 });
    }
    const fechaRealizacion = moment(proforma.fechaRealizacion).format('YYYY-MM-DD');
    const fechaFin = moment(fechaRealizacion, "YYYY-MM-DD").add(proforma.id, 'days');

    const boletaHabitacion = await db('boletaHabitacion').insert({
      fechaRealizacion,
      dias: proforma.dias,
      monto: proforma.monto,
      idEstadoBoletaHabitacion: 1,
      fechaFin,
    });

    if(boletaHabitacion.length === 0){
      return res.json({ mensaje:'Error al crear la boleta', estado: 400})
    }
    
    const representante = huespedes[0];
    const detalleBoletaHabitacion = huespedes.map(hue => {
      if(hue.idHuesped === representante.idHuesped){
        return {
          idHuesped: hue.idHuesped,
          idBoletaHabitacion: boletaHabitacion[0],
          representante: 1,
        }
      } else {
        return {
          idHuesped: hue.idHuesped,
          idBoletaHabitacion: boletaHabitacion[0],
          representante: 0,
        }
      }
    });

    db.transaction((trx) => {
      db.insert(detalleBoletaHabitacion)
        .into('detalleBoletaHabitacion')
        .transacting(trx)
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .then((inserts) => {
      return res.json({ message: 'Boleta creada correctamente' , status: 200, idProforma: proforma[0] });
    })
    .catch((error) => {
      return res.json({ message: 'Error al crear la boleta', status: 400});
    });
    
    return res.json({ mensaje: 'Boleta creada correctamente', estado: 200})
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

module.exports = {
    guardarProforma,
    anularProforma,
    procesarProforma,
};