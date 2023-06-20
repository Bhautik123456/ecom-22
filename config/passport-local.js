const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('../models/adminModel')

passport.use('admin', new LocalStrategy({
    usernameField: 'email'
}, async function (email, password, done) {
    let admin = await Admin.findOne({ email: email });
    if (!admin || admin.password != password) {
        return done(null, false)
    }
    else {
        return done(null, admin);
    }
}))
passport.serializeUser(function (admin, done) {
    return done(null, admin.id);
})

passport.deserializeUser(async function (id, done) {
    let AdminData = await Admin.findById(id);
    if (AdminData) {
        return done(null, AdminData);
    }
    else {
        return done(null, false);
    }
})

passport.checkUser = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        return res.redirect('/');
    }
}
module.exports = passport