const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const _ = require('lodash');

async function listarHabitacion(req,res){
    const { db } = req.app;
    try {
        const habitaciones = await db.select('*').from('habitacion').where('estado', true);
        return res.json(habitaciones);
      } catch (error) {
        const errorMessage = handleError(error);
        return res.json({errorMessage, estado: 500});
      }
}


module.exports = {
    listarHabitacion
};