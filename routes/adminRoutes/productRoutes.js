const express = require('express');

const routes = express.Router();

const Product = require('../../models/productModel')

const productController = require('../../controller/adminController/productController')

routes.get('/addproduct', productController.addproduct);

routes.post('/ajaxGetBrandType', productController.ajaxGetBrandType);

routes.post('/insertproduct', Product.uploadedAvatar, productController.insertproduct)

module.exports = routes;