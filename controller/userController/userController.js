const Category = require('../../models/categoryModel');
const SubCategory = require('../../models/subcategoryModel');
const ExtraCategory = require('../../models/extracategoryModel');
const Product = require('../../models/productModel');
const Brand = require('../../models/brandModel');
const Type = require('../../models/typeModel');
const User = require('../../models/userModel');

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
});

module.exports.home = async (req, res) => {
    let cateData = await Category.find({ isActive: true });
    let subData = await SubCategory.find({ isActive: true });
    let extraData = await ExtraCategory.find({ isActive: true });
    return res.render('user/home', {
        'cateData': cateData,
        'subData': subData,
        'extraData': extraData
    })
}
module.exports.products = async (req, res) => {
    let cateId = req.params.Id;
    let subId = req.params.subId;
    let extraId = req.params.extraId;
    let productData = await Product.find({ categoryId: cateId, subcategoryId: subId, extracategoryId: extraId });

    let brandData = await Brand.find({ categoryId: cateId, subcategoryId: subId, extracategoryId: extraId });
    let typeData = await Type.find({ categoryId: cateId, subcategoryId: subId, extracategoryId: extraId });

    let cateData = await Category.find({ isActive: true });
    let subData = await SubCategory.find({ isActive: true });
    let extraData = await ExtraCategory.find({ isActive: true });
    return res.render('user/products', {
        'productData': productData,
        'cateData': cateData,
        'subData': subData,
        'extraData': extraData,
        'brandData': brandData,
        'typeData': typeData
    })
}
module.exports.findBrandWisedata = async (req, res) => {
    let productData = await Product.find({ 'brandId': req.body.brandIds });
    return res.render('user/brandFilter', {
        'brandFilter': productData
    })
}
module.exports.addlogin = async (req, res) => {

    let cateData = await Category.find({ isActive: true });
    let subData = await SubCategory.find({ isActive: true });
    let extraData = await ExtraCategory.find({ isActive: true });
    return res.render('user/signin', {
        'cateData': cateData,
        'subData': subData,
        'extraData': extraData,
    })
}

module.exports.singleImg = async (req, res) => {
    
}

module.exports.insertSignin = async (req, res) => {

    req.body.isActive = true;
    req.body.createdAt = nDate;
    req.body.updatedAt = nDate;

    let userData = await User.create(req.body);
    if (userData) {
        return res.redirect('back');
    }
    else {
        console.log("semthing wrong");
        return res.redirect('back');
    }
}