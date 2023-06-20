const Category = require('../../models/categoryModel');
const SubCategory = require('../../models/subcategoryModel');
const ExtraCategory = require('../../models/extracategoryModel');
const { options } = require('../../routes/adminRoutes/extracategoryRoutes');
const Brand = require('../../models/brandModel');

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
});
module.exports.addbrand = async (req, res) => {
    let categoryData = await Category.find({});
    return res.render('admin/Add_brand', {
        'catData': categoryData
    });
}
module.exports.insertbrand = async (req, res) => {
    req.body.isActive = true;
    req.body.createdAt = nDate;
    req.body.updatedAt = nDate;

    let bData = await Brand.create(req.body);
    if (bData) {
        return res.redirect('back');
    }
    else {
        console.log("semthing wrong");
        return res.redirect('back');
    }
}

module.exports.ajaxGetExtraCategory = async (req, res) => {
    let extraCategoryData = await ExtraCategory.find({ subcategoryId: req.body.subcategoryId });
    let option = `<option value="">--Select Extra Categoty--</option>`;
    for (let ed of extraCategoryData) {
        option += `<option value="${ed.id}">${ed.extracategory_name}</option>`;
    }
    return res.json(option);
}