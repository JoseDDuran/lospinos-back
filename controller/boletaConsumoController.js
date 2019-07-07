const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const moment = require('moment');
const _ = require('lodash');

async function generarBoletaConsumo(req, res){
    const { db } = req.app;
    const { documentoIdentidad, detalles } = req.body;
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

      const boletaConsumo = await (db.first('bc.idBoletaConsumo').from('boletaConsumo AS bc')
         .where('bc.idBoletaHabitacion', boletaHabitacion.idBoletaHabitacion)
         ) || {};

        const detalleBoletaConsumo = detalles.map(det => {
            return {
                idBoletaConsumo: boletaConsumo.idBoletaConsumo,
                descripcion: det.descripcion,
                monto: det.monto
            }
        });

      db.transaction((trx) => {
        db.insert(detalleBoletaConsumo)
          .into('detalleBoletaConsumo')
          .transacting(trx)
          .then(trx.commit)
          .catch(trx.rollback);
      })
      .then((inserts) => {
        return res.json({ message: 'Detalle agregado correctamente' , status: 200 });
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
    generarBoletaConsumo,
};