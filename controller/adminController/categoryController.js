const Category = require('../../models/categoryModel');

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
});

module.exports.addcategory = (req, res) => {
    return res.render('admin/Add_category');
}

module.exports.insertCategory = async (req, res) => {
    var imagePath = '';
    if (req.file) {
        imagePath = Category.avatarPath + "/" + req.file.filename;
    }
    req.body.avatar = imagePath;
    req.body.isActive = true;
    req.body.createdAt = nDate;
    req.body.updatedAt = nDate;

    let cData = await Category.create(req.body);
    if (cData) {
        return res.redirect('back');
    }
    else {
        console.log("semthing wrong");
        return res.redirect('back');
    }
}