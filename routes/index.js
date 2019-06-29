const express = require('express');
const exampleRoutes = require('./exampleRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const boletaHabitacionRoutes= require('./boletaHabitacion')
const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/example', exampleRoutes);
Router.use('/usuario', usuarioRoutes);
Router.use('/proforma',boletaHabitacionRoutes);

module.exports = Router;
