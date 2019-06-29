const express = require('express');
const exampleRoutes = require('./exampleRoutes');


const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/example', exampleRoutes);

module.exports = Router;
