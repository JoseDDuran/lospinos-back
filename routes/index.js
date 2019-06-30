const express = require('express');
const exampleRoutes = require('./exampleRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const boletaHabitacionRoutes= require('./boletaHabitacion.Routes')
const habitacionRoutes = require('./habitacion.Routes');
const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/example', exampleRoutes);
Router.use('/usuario', usuarioRoutes);
Router.use('/proforma',boletaHabitacionRoutes);
Router.use('/habitacion',habitacionRoutes);

module.exports = Router;
