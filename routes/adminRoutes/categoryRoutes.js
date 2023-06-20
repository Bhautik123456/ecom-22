const express = require('express');

const routes = express.Router();

const Category = require('../../models/categoryModel')

const categoryController = require('../../controller/adminController/categoryController')

routes.get('/addCategory', categoryController.addcategory);

routes.post('/insertCategory', Category.uploadedAvatar, categoryController.insertCategory);

module.exports = routes;