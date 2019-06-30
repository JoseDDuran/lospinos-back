const express = require('express');
const usuarioController = require('../controller/usuarioController');

const Router = express.Router();

Router.get('/' , usuarioController.listarUsuario);
Router.post('/agregar', usuarioController.crearUsuario);
Router.post('/editar/:id', usuarioController.editarUsuario);
Router.post('/deshabilitar/:id', usuarioController.deshabilitarUsuario);
Router.post('/habilitar/:id', usuarioController.habilitarUsuario);
Router.post('/inicioSesion', usuarioController.inicioSesion);
Router.post('/asignacioncontrasena/:id', usuarioController.restablecerUsuarioContrasena);
Router.post('/contrasena/:id', usuarioController.cambiarContrasena);

module.exports = Router;