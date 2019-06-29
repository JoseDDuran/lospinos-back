const express = require('express');
const exampleControllers = require('../controller/exampleControllers');

const Router = express.Router();

Router.get('/', exampleControllers.getExample);
Router.post('/post', exampleControllers.getExample2);

module.exports = Router;
