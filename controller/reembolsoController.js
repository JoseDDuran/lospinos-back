const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const _ = require('lodash');

async function solicitarReembolso(req, res) {
  const { db } = req.app;
  const { descripcion, idBoletaHabitacion } = req.body;
  try {
    const reembolso = await db('reembolso').insert({
        descripcion,
        apellidos,
      });
    const productos = await db.select('*').from('producto');
    
    return res.json({ productos, estado: 200 });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

async function listarCategorias(req, res) {
    const { db } = req.app;
    try {
      const productos = await db.select('*').from('categoria');
      
      return res.json({ categoria, estado: 200 });
    } catch (error) {
      const errorMessage = handleError(error);
      return res.json({errorMessage, estado: 500});
    }
  }
  

module.exports = {
    solicitarReembolso,
    listarCategorias
};