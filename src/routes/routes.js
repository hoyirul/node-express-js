const express = require('express');

const userController = require('./../controllers/userController')
const route = express.Router();



route.get('/', userController.index);
route.post('/', userController.store);
route.patch('/:id', userController.update);
route.delete('/:id', userController.destroy);

module.exports = route;