const express = require('express');
const boletaConsumoController = require('../controller/boletaConsumoController');

const Router = express.Router();

Router.post('/', boletaConsumoController.generarBoletaConsumo);

module.exports = Router;