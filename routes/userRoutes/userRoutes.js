const express = require('express');

const routes = express.Router();

const userController = require('../../controller/userController/userController')

routes.get('/', userController.home)

routes.get('/products/:Id/:subId/:extraId', userController.products);

routes.post('/findBrandWisedata', userController.findBrandWisedata);

routes.get('/singleImg', userController.singleImg);

routes.get('/addlogin', userController.addlogin);

routes.post('/insertSignin', userController.insertSignin);

module.exports = routes