const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const _ = require('lodash');

async function listarHabitacion(req,res){
  const { db } = req.app;
  const { tipo, plazas } = req.query;
  try { 
    let habitaciones;
    if(plazas === 2){
      habitaciones = await db.select('h.idHabitacion', 'h.nombre', 'h.precio', 'th.plazas').from('habitacion AS h')
      .innerJoin('tipoHabitacion AS th', 'th.idTipoHabitacion', 'h.idTipoHabitacion')
      .where('th.nombre', tipo)
      .where('estadoHabitacion', 'Activo')
      .orderBy('th.plazas', 'DESC');
    } else {
      habitaciones = await db.select('h.idHabitacion', 'h.nombre', 'h.precio', 'th.plazas').from('habitacion AS h')
      .innerJoin('tipoHabitacion AS th', 'th.idTipoHabitacion', 'h.idTipoHabitacion')
      .where('th.nombre', tipo)
      .where('estadoHabitacion', 'Activo')
      .orderBy('th.plazas', 'ASC')
    }
    
    return res.json(habitaciones);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({ errorMessage, estado: 500 });
  }
}


async function listarTodasHabitaciones(req,res){
  const { db } = req.app;
  try { 
   const habitaciones = await db.select('*').from('habitacion');
    return res.json({habitaciones, estado: 200 });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({ errorMessage, estado: 500 });
  }
}

module.exports = {
  listarHabitacion,
  listarTodasHabitaciones
};