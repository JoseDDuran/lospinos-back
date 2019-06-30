const express = require('express');
const habitacionControllers = require('../controller/habitacionController');

const Router = express.Router();

Router.get('/', habitacionControllers.listarHabitacion);

module.exports = Router;