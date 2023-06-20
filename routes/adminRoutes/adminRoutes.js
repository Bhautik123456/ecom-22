const express = require('express');

const routes = express.Router();

const Admin = require('../../models/adminModel');

const passport = require('passport');

const adminConroller = require('../../controller/adminController/adminController');

routes.get('/', adminConroller.login);

routes.get('/dashboard', passport.checkUser, adminConroller.dashboard);

routes.get('/AddAdmin', passport.checkUser, adminConroller.add_admin);

routes.post('/insertAdmin', passport.checkUser, Admin.uploadedAvatar, adminConroller.insertAdmin);

routes.get('/view_admin', passport.checkUser, adminConroller.view_admin);

routes.post('/checkLogin', passport.authenticate('admin', { failureRedirect: '/' }), adminConroller.checkLogin);

routes.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            console.log(err);
        }
        next();
    });
    return res.redirect('/');
})

routes.use('/category', passport.checkUser, require('./categoryRoutes'));

routes.use('/subcategory', passport.checkUser, require('./subcategoryRoutes'));

routes.use('/extracategory', passport.checkUser, require('./extracategoryRoutes'));

routes.use('/brand', passport.checkUser, require('./brandRoutes'));

routes.use('/type', passport.checkUser, require('./typeRoutes'));

routes.use('/product', passport.checkUser, require('./productRoutes'));

module.exports = routes;