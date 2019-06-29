const express = require('express');
const usuarioController = require('../controller/usuarioController');

const Router = express.Router();

Router.get('/' , usuarioController.listarUsuario);
Router.post('/agregar', usuarioController.crearUsuario);
Router.post('/editar', usuarioController.editarUsuario);
Router.post('/deshabilitar', usuarioController.deshabilitarUsuario);
Router.post('/habilitar', usuarioController.habilitarUsuario);
Router.post('/inicio-sesion', usuarioController.inicioSesion);

module.exports = Router;