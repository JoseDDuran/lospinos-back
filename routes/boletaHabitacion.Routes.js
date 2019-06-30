const express = require('express');
const boletaHabitacionControllers = require('../controller/boletaHabitacionController');

const Router = express.Router();

Router.post('/agregar', boletaHabitacionControllers.guardarProforma);
Router.post('/anular/:id', boletaHabitacionControllers.anularProforma);
Router.post('/procesar/:id', boletaHabitacionControllers.procesarProforma);


module.exports = Router;