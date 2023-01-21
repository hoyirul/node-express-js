const express = require('express');

const userController = require('./../controllers/userController')
const logMiddleware = require('./../middleware/logsMiddleware')
const route = express.Router();



route.get('/', userController.index);
route.post('/', userController.store);

module.exports = route;