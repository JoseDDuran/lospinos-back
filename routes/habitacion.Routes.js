const express = require('express');
const habitacionControllers = require('../controller/habitacionController');

const Router = express.Router();

Router.get('/', habitacionControllers.listarHabitacion);
Router.get('/todas', habitacionControllers.listarTodasHabitaciones);

module.exports = Router;