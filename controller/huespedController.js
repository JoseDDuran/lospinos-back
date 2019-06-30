const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const _ = require('lodash');


async function crearHuesped(req, res){
    const { nombres, apellidos, genero, edad, documentoIdentidad } = req.body; 
    const { db } = req.app;
  try {

    const huespedBusqueda = await (db.first('idHuesped').from('huesped')
        .where('documentoIdentidad', documentoIdentidad)) || {};

    if(!_.isEmpty(huespedBusqueda)){
      return res.json({ mensaje: 'Este huesped ya esta registrado en el sistema', estado: 200})
    }

    const huesped = db('usuario').insert({
      nombres,
      apellidos,
      genero,
      edad,
      documentoIdentidad
    });

    if(huesped.length === 0){
      return res.json({ mensaje: 'Error al crear usuario', estado: 400});
    }
    return res.json({ mensaje: 'Usuario creado correctamente', idHuesped: huesped[0] ,estado: 200});
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

async function buscarHuesped(req, res){
    const { idHuesped } = req.params; 
    const { db } = req.app;
  try {
    const huespedBusqueda = await (db.first('*').from('huesped')
        .where('idHuesped', idHuesped)) || {};
    
    if(_.isEmpty(huespedBusqueda)){
      return res.json({ mensaje: 'Este huesped no esta registrado en el sistema', estado: 200})
    }

    return res.json({ huesped: huespedBusqueda ,estado: 200});
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

module.exports = {
  crearHuesped,
  buscarHuesped,
};
