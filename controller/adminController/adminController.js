const { Long } = require('mongodb')
const Admin = require('../../models/adminModel');

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
});

module.exports.login = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/dashboard');
    }
    else {
        return res.render('admin/Admin_login');
    }
}

module.exports.dashboard = (req, res) => {
    return res.render('admin/dashboard');
}

module.exports.add_admin = (req, res) => {
    return res.render('admin/Add_admin');
}

module.exports.insertAdmin = async (req, res) => {

    var imagePath = '';
    if (req.file) {
        imagePath = Admin.avatarPath + "/" + req.file.filename;
    }
    req.body.avatar = imagePath;
    req.body.isActive = true;
    req.body.createdAt = nDate;
    req.body.updatedAt = nDate;

    let AdminData = await Admin.create(req.body);
    if (AdminData) {
        return res.redirect('back');
    }
    else {
        console.log("semthing wrong");
        return res.redirect('back');
    }
}

module.exports.view_admin = async (req, res) => {
    let AdminData = await Admin.find({});
    return res.render('admin/view_admin', {
        'AdminData': AdminData
    })
}

module.exports.checkLogin = async (req, res) => {
    return res.redirect('/dashboard')
}
