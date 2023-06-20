const express = require('express');

const routes = express.Router();

const subcategoryController=require('../../controller/adminController/subcategoryController')

routes.get('/AddSubCategory',subcategoryController.addSubCategory);

routes.post('/insertSubCategory',subcategoryController.insertSubCategory);

module.exports = routes;