const express = require('express');

const routes = express.Router();

const Type = require('../../models/typeModel')

const typeController = require('../../controller/adminController/typeController')

routes.get('/addtype', typeController.addtype);

routes.post('/inserttype', typeController.inserttype);

module.exports = routes;