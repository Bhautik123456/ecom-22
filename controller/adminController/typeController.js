const Category = require('../../models/categoryModel');
const Type=require('../../models/typeModel')

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
});
module.exports.addtype = async (req, res) => {
    let categoryData = await Category.find({});
    return res.render('admin/Add_type', {
        'catData': categoryData
    });
}
module.exports.inserttype = async (req, res) => {
    req.body.isActive = true;
    req.body.createdAt = nDate;
    req.body.updatedAt = nDate;

    let tData = await Type.create(req.body);
    if (tData) {
        return res.redirect('back');
    }
    else {
        console.log("semthing wrong");
        return res.redirect('back');
    }
}
