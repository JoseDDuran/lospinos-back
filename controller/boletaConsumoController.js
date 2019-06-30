const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const moment = require('moment');
const _ = require('lodash');

async function generarBoletaConsumo(req, res){
    const { db } = req.app;
    const { idBoletaConsumo, detalles } = req.body;
    try {
        const boletaConsumoBusqueda = await (db.first('*').from('boletaConsumo')
            .where('idBoletaConsumo', idBoletaConsumo)) || {};

        if(_.isEmpty(boletaConsumoBusqueda)){
            return res.json({ mensaje: 'No existe esta boleta consumo', estado: 400})
        }

        const detalleBoletaConsumo = detalles.map(det => {
            return {
                idBoletaConsumo,
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