const express = require('express');
const boletaHabitacionControllers = require('../controller/boletaHabitacionController');

const Router = express.Router();

Router.post('/agregar', boletaHabitacionControllers.agregarProforma);
Router.post('/listar',boletaHabitacionControllers.listarProforma)


module.exports = Router;