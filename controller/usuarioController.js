const { handleError } = require('../utils/helpers/expressHelper');
const encrypt = require('../../src/utils/encrypt');
const _ = require('lodash');

async function login(req, res) {
  const { correo, contrasena } = req.body; 
  const { db } = req.app;
  try {
    const usuario = await (db.select('u.id_usuario', 'u.nombres', 'u.apellidos', 'u.idRol', 'r.nombre')
          .from('usuario AS u')
          .innerJoin('rol AS r', 'r.idRol', 'u.idRol')
          .where('u.email', correo)) || {};
    
          if(_.isEmpty(usuario)){
      return res.status(400).json({ message: 'Correo electrónico inválido '});
    }

    console.log('hola')
    return res.json({ message: 'DEBO PORTARME BIEN Y NO ESCRIBIRLE :"v'});
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

module.exports = {
  login,
};
