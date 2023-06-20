const express = require('express');

const routes = express.Router();

const ExtraCategory = require('../../models/categoryModel')

const extracategoryController = require('../../controller/adminController/extracategoryController')

routes.get('/addExtraCategory', extracategoryController.addExtraCategory);

routes.post('/ajaxGetSubCategory', extracategoryController.ajaxGetSubCategory);

routes.post('/insertExtraCategory', extracategoryController.insertExtraCategory);

module.exports = routes