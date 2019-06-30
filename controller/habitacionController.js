const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const _ = require('lodash');

async function listarHabitacion(req,res){
  const { db } = req.app;
  const { tipo, plazas } = req.query;
  try {
    const habitaciones = await db.select('*').from('habitacion AS h')
    .innerJoin('tipoHabitacion AS th', 'th.idTipoHabitacion', 'h.idTipoHabitacion')
    .where('h.nombre', tipo)
    .where('h.plazas', plazas)
    .where('estadoHabitacion', 'Activo');
    return res.json(habitaciones);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({ errorMessage, estado: 500 });
  }
}

module.exports = {
  listarHabitacion
};