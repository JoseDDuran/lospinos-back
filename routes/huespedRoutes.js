const express = require('express');
const huespedController = require('../controller/huespedController');

const Router = express.Router();

Router.post('/', huespedController.crearHuesped);
Router.get('/:id', huespedController.buscarHuesped);

module.exports = Router;