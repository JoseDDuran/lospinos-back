const express = require('express');
const exampleRoutes = require('./exampleRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/example', exampleRoutes);
Router.use('/usuario', usuarioRoutes);

module.exports = Router;
