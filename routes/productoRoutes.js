const express = require('express');
const productoController = require('../controller/productoController');

const Router = express.Router();

Router.get('/' , productoController.listarProductos);
Router.get('/categorias', productoController.listarCategorias)
module.exports = Router;