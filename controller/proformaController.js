const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const moment = require('moment');
const _ = require('lodash');
const knexnest = require('knexnest');

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
    
    const proforma = await (db.first('*').from('proforma')
      .where('idProforma', id)
      .where('estado', 1)) || { };

    if(_.isEmpty(proforma)){
      return res.json({ mensaje:'Esta proforma no existe', estado: 400})
    }

    await db('proforma')
      .update({
        estado: 0
      }).where('idProforma', id)
    
    return res.json({ mensaje: 'Proforma anulada correctamente', estado: 200})
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

function asignarHuespedHabitacion(huespedes, boletaHabitacion){
  const representante = huespedes[0];
    const detalleBoletaHabitacion = huespedes.map(hue => {
      if(hue.idHuesped === representante.idHuesped){
        return {
          idHuesped: hue.idHuesped,
          idBoletaHabitacion,
          representante: true,
        }
      } else {
        return {
          idHuesped: hue.idHuesped,
          idBoletaHabitacion,
          representante: false,
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
      return res.json({ message: 'Boleta creada correctamente' , status: 200 });
    })
    .catch((error) => {
      return res.json({ message: 'Error al crear la boleta', status: 400, error});
    });
}

async function procesarProforma(req, res){
  const { id } = req.params; 
  const { db } = req.app;
  const { huespedes } = req.body;
  try {
    const proforma = await db.first('*').from('proforma')
      .where('idProforma', id)
      .where('estado', 1);

    if(proforma.length === 0){
      return res.json({ mensaje: 'Esta proforma no existe', estado: 400 });
    }
    const fechaRealizacion = moment(proforma.fechaRealizacion).format('YYYY-MM-DD');
    const fechaFin = moment(fechaRealizacion).add(proforma.dias, 'days').format('YYYY-MM-DD');

    const boletaHabitacion = await db('boletaHabitacion').insert({
      fechaRealizacion,
      dias: proforma.dias,  
      monto: proforma.monto,
      idEstadoBoletaHabitacion: 1,
      fechaFin,
      idProforma: id,
    });


    if(boletaHabitacion.length === 0) {
      await db('proforma').update({
        estado : 3
      }).where('idProforma', proforma.idProforma);
    }

    
    asignarHuespedHabitacion(huespedes, boletaHabitacion[0]);
   
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

async function buscarProforma(req, res){
  const { db } = req.app;
  try {
    const proforma = await (knexnest(
      db
        .select(
          'P.idProforma AS idProforma ',
          'P.fechaRealizacion AS fechaRealizacion',
          'P.dias AS dias',
          'P.monto AS monto',
          'P.nombre AS nombre',
          'P.documentoIdentidad AS documentoIdentidad',
          'P.estado AS estado',
          'H.idHabitacion AS detalle__idHabitacion',
          'H.nombre AS detalle__nombre',
          'H.precio AS detalle__precio',
          'H.estadoHabitacion AS detalle__estadoHabitacion',
          'H.idTipoHabitacion AS detalle__idTipoHabitacion'
        )
        .from('proforma AS P')
        .innerJoin('detalleProforma AS DP', 'P.idProforma', 'DP.idProforma')
        .innerJoin('habitacion AS H', 'H.idHabitacion', 'DP.idHabitacion')
        .where('P.estado', 1)
    ) ) || []; 

    if(_.isEmpty(proforma)){
      return res.json({ mensaje: 'No hay proformas pendientes', estado: 400 })
    }
    return res.json({ proforma, estado: 200 });

  } catch(error){
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}


module.exports = {
    guardarProforma,
    anularProforma,
    procesarProforma,
    buscarProforma,
};