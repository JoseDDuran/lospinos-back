const { handleError } = require('../utils/helpers/expressHelper');
const jwt = require('../utils/jwt');
const _ = require('lodash');

async function inicioSesion(req, res) {
  const { correo, contrasena } = req.body; 
  const { db } = req.app;
  try {
    const usuario = await (db.first('u.idUsuario', 'u.nombres', 'u.apellidos', 'u.idRol', 'u.contrasena',
             'r.nombre')
          .from('usuario AS u')
          .innerJoin('rol AS r', 'r.idRol', 'u.idRol')
          .where('u.correo', correo)) || {};
    
    
    if(_.isEmpty(usuario)){
      return res.status(400).json({  message: 'Correo electrónico inválido '});
    }

    if(usuario.contrasena !== contrasena){
      return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
    }
    
    const token = jwt.signin({ ...usuario, contrasena: undefined });
    
    delete usuario.contrasena;
    return res.json({ token, usuario });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function crearUsuario(req, res){
  const { nombres, apellidos, genero, correo, documentoIdentidad, contrasena, idRol } = req.body; 
  const { db } = req.app;
  try {

    const usuarioBusqueda = await db.first('idUsuario').from('usuario').where('correo', correo);
    
    if(usuarioBusqueda.length === 0){
      return res.status(400).json({ mensaje: 'Este correo ya esta registrado con usuario' })
    }

    const usuario = db('usuario').insert({
      nombres,
      apellidos,
      genero,
      correo,
      documentoIdentidad,
      contrasena,
      idRol
    });

    if(usuario.length === 0){
      return res.status(400).json({ mensaje: 'Error al crear usuario'});
    }
    return res.json({ mensaje: 'Usuario creado correctamente '});
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function editarUsuario(req, res){
  const { db } = req.app;
  const { id } = req.params;
  const { nombres, apellidos, genero, correo, documentoIdentidad, contrasena, idRol } = req.body; 
  try {

    const usuarioBusqueda = await db.first('idUsuario').from('usuario').where('idUsuario', id);
    
    if(usuarioBusqueda.length === 0){
      return res.status(400).json({ mensaje: 'Este usuario no existe' })
    }

    await db('usuario')
        .update({
          nombres,
          apellidos,
          genero,
          correo,
          documentoIdentidad,
          contrasena,
          idRol
        }).where('idUsuario', id);

    return res.json({ mensaje: 'Usuario Editado correctamente '});
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function listarUsuario(req, res){
  const { db } = req.app;
  try {
    const usuarios = await db.select('*').from('usuario').where('estado', true);
    return res.json(usuarios);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function deshabilitarUsuario(req, res){
  const { db } = req.app;
  const { id } = req.params;
  try {
    await db('usuario')
        .update({
          estado : false
        }).where('idUsuario', id);

    return res.json({ mensaje: 'Usuario Deshabilitado correctamente '});
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function habilitarUsuario(req, res){
  const { db } = req.app;
  const { id } = req.params;
  try {
    await db('usuario')
        .update({
          estado : true
        }).where('idUsuario', id);

    return res.json({ mensaje: 'Usuario Habilitado correctamente '});
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

module.exports = {
  inicioSesion,
  crearUsuario,
  editarUsuario,
  listarUsuario,
  deshabilitarUsuario,
  habilitarUsuario
};
