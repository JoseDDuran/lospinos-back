const express = require('express');
const boletaHabitacionControllers = require('../controller/boletaHabitacionController');
const proformaController = require('../controller/proformaController');

const Router = express.Router();

Router.post('/agregar', proformaController.guardarProforma);
Router.post('/anular/:id', proformaController.anularProforma);
Router.post('/procesar/:id', proformaController.procesarProforma);
Router.get('/:documentoIdentidad', boletaHabitacionControllers.buscarBoletaHabitacion);
Router.post('/buscar', boletaHabitacionControllers.buscarBoletaConsumoYDetalle);
Router.post('/caducar/:id', boletaHabitacionControllers.finalizarBoletaHabitacion);
Router.post('/pendientes', proformaController.buscarProforma);

module.exports = Router;