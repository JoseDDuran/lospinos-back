const express = require('express');
const exampleRoutes = require('./exampleRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const boletaHabitacionRoutes= require('./boletaHabitacion.Routes')
const habitacionRoutes = require('./habitacion.Routes');
const productoRoutes = require('./productoRoutes');


const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/example', exampleRoutes);
Router.use('/usuario', usuarioRoutes);
Router.use('/proforma',boletaHabitacionRoutes);
Router.use('/habitacion',habitacionRoutes);
Router.use('/producto', productoRoutes)

module.exports = Router;
