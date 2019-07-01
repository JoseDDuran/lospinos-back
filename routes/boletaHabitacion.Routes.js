const express = require('express');
const boletaHabitacionControllers = require('../controller/boletaHabitacionController');
const proformaController = require('../controller/proformaController');

const Router = express.Router();

Router.post('/agregar', proformaController.guardarProforma);
Router.post('/anular/:id', proformaController.anularProforma);
Router.post('/procesar/:id', proformaController.procesarProforma);
Router.post('/buscar', boletaHabitacionControllers.buscarBoletaHabitacion);
Router.post('/caducar/:id', boletaHabitacionControllers.finalizarBoletaHabitacion);

module.exports = Router;