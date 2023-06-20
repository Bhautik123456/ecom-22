const express = require('express');

const routes = express.Router();

const brand = require('../../models/brandModel')

const brandController = require('../../controller/adminController/brandController')

routes.get('/addbrand', brandController.addbrand);

routes.post('/ajaxGetExtraCategory', brandController.ajaxGetExtraCategory);

routes.post('/insertbrand', brandController.insertbrand);

module.exports = routes;