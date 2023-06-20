const Category = require('../../models/categoryModel');
const SubCategory = require('../../models/subcategoryModel');
const ExtraCategory = require('../../models/extracategoryModel');

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
});
module.exports.addExtraCategory = async (req, res) => {
    let categoryData = await Category.find({});
    return res.render('admin/Add_extracategory', {
        'catData': categoryData
    });
}
module.exports.insertExtraCategory = async (req, res) => {
    req.body.isActive = true;
    req.body.createdAt = nDate;
    req.body.updatedAt = nDate;

    let eData = await ExtraCategory.create(req.body);
    if (eData) {
        return res.redirect('back');
    }
    else {
        console.log("semthing wrong");
        return res.redirect('back');
    }
}

module.exports.ajaxGetSubCategory = async (req, res) => {
    // console.log(req.body.categoryId);
    let subData = await SubCategory.find({ categoryId: req.body.categoryId });
    var optionData = `<option value="">--Select Sub Category--</option>`;
    for (var sd of subData) {
        optionData += `<option value="${sd.id}">${sd.subcategory_name}</option>`;
    }
    return res.json(optionData)

}