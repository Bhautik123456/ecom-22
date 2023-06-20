const Category = require('../../models/categoryModel');
const SubCategory = require('../../models/subcategoryModel');

module.exports.addSubCategory = async (req, res) => {
    let categoryData = await Category.find({});
    return res.render('admin/Add_subcategory', {
        'catData': categoryData
    });
}

module.exports.insertSubCategory = async (req, res) => {
    // console.log(req.body)
    const nDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Calcutta'
    });

    req.body.createdAt = nDate;
    req.body.updatedAt = nDate;
    req.body.isActive = true;

    let sData = await SubCategory.create(req.body);
    if (sData) {
        return res.redirect('back');
    }
    else {
        return res.redirect('back');
    }
}