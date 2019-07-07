const express = require('express');
const huespedController = require('../controller/huespedController');

const Router = express.Router();

Router.post('/', huespedController.crearHuespedUno);
Router.get('/:id', huespedController.buscarHuesped);

module.exports = Router;