const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const _ = require('lodash');


async function crearHuesped(req, res){
    //const { nombres, apellidos, genero, edad, documentoIdentidad } = req.body; 
    const { huespedes } = req.body;
    const { db } = req.app;
  try {
    const idsHuespedes = [];
    /*const huespedBusqueda = await (db.first('idHuesped').from('huesped')
        .where('documentoIdentidad', documentoIdentidad)) || {};

    if(!_.isEmpty(huespedBusqueda)){
      return res.json({ mensaje: 'Este huesped ya esta registrado en el sistema', estado: 200})
    } */
    await Promise.all(huespedes.map(async (e) => {
      const huesped = await db('huesped').insert({
        nombres: e.nombres,
        apellidos: e.apellidos,
        genero: e.genero,
        edad: e.edad,
        documentoIdentidad: e.documentoIdentidad,
      });
      idsHuespedes.push(huesped[0]);
    }));

    return res.json({ mensaje: 'Huespedes creado correctamente', idsHuespedes ,estado: 200});
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json({errorMessage, estado: 500});
  }
}

async function crearHuespedUno(req, res){
  const { nombres, apellidos, genero, edad, documentoIdentidad } = req.body; 
  //const { huespedes } = req.body;
  const { db } = req.app;
  try {
  //const idsHuespedes = [];
  const huespedBusqueda = await (db.first('idHuesped').from('huesped')
      .where('documentoIdentidad', documentoIdentidad)) || {};

  if(!_.isEmpty(huespedBusqueda)){
    return res.json({ mensaje: 'Este huesped ya esta registrado en el sistema', estado: 200})
  } 
 
    const huesped = await db('huesped').insert({
      nombres,
      apellidos,
      genero,
      edad,
      documentoIdentidad,
    });

  return res.json({ mensaje: 'Huesped creado correctamente', idHuesped: huesped[0] ,estado: 200});
  } catch (error) {
  const errorMessage = handleError(error);
  return res.json({errorMessage, estado: 500});
  }
}

async function buscarHuesped(req, res){
    const { id } = req.params; 
    const { db } = req.app;
  try {
    const huespedBusqueda = await (db.first('*').from('huesped')
        .where('documentoIdentidad', id)) || {};
    
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
  crearHuespedUno,
};
