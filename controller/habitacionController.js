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

async function listarCategorias(req, res){
  const { db } = req.app;
  try{
    const tipoHabitacion = await db.select('*').from('tipohabitacion');
    return res.json({ tipoHabitacion, estado: 200 });
  } catch(error){
    const errorMessage = handleError(error);
    return res.json({ errorMessage, estado: 500 });
  }
}

async function listarHabitacionPorCategoria(req, res){
  const { db } = req.app;
  const { idCategoria } = req.params;
  try {
    const habitaciones = await db.select('*').from('habitacion')
        .where('idTipoHabitacion', idCategoria)

    return res.json({ habitaciones, estado : 200 });
  } catch(error){
    const errorMessage = handleError(error);
    return res.json({ errorMessage, estado: 500 });
  }
}


async function listarTodasHabitaciones(req,res){
  const { db } = req.app;
  try { 
   const habitacionesBusqueda = await db.select('*').from('habitacion')
    .whereNot({
      estadoHabitacion: 'Inactivo' 
    });

    const habitaciones = habitacionesBusqueda.map((hab) => {
      if(hab.inicio_limpieza){
        const now = moment().format();
        const then = hab.inicio_limpieza;
        const restante = moment.utc(moment(now, 'YYYY-MM-DD HH:mm:ss')
          .diff(moment(then,'YYYY-MM-DD HH:mm:ss' ))).format('HH:mm:ss');
          return {
            idHabitacion: hab.idHabitacion,
            nombre: hab.nombre,
            precio: hab.precio,
            idTipoHabitacion: hab.idTipoHabitacion,
            limpieza: restante
          }
      } else {
        return {
          idHabitacion: hab.idHabitacion,
          nombre: hab.nombre,
          precio: hab.precio,
          idTipoHabitacion: hab.idTipoHabitacion,
          limpieza: 'Sin tiempo de espera'
        }
      }
      
    });
    return res.json({habitaciones, estado: 200 });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({ errorMessage, estado: 500 });
  }
}

module.exports = {
  listarHabitacion,
  listarTodasHabitaciones,
  listarCategorias,
  listarHabitacionPorCategoria
};