const Category = require('../../models/categoryModel');
const Brand = require('../../models/brandModel');
const Type = require('../../models/typeModel');
const Product = require('../../models/productModel');

const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
});

module.exports.addproduct = async (req, res) => {
    let categoryData = await Category.find({});
    return res.render('admin/Add_product', {
        'catData': categoryData
    });
}

module.exports.insertproduct = async (req, res) => {
    // console.log(req.files);
    var singalImgPath = '';
    if (req.files.image) {
        singalImgPath = Product.singalPath + "/" + req.files.image[0].filename;
    }
    var multipalImgPath = [];
    if (req.files.images) {
        for (let i = 0; i < req.files.images.length; i++) {
            multipalImgPath.push(Product.multipalPath + "/" + req.files.images[i].filename);
        }
    }
    req.body.image = singalImgPath;
    req.body.images = multipalImgPath;
    req.body.createdAt = nDate;
    req.body.updatedAt = nDate;
    req.body.isActive = true;

    let pData = await Product.create(req.body);
    if (pData) {
        return res.redirect('back');
    }
    else {
        return res.redirect('back');
    }
}



module.exports.ajaxGetBrandType = async (req, res) => {
    console.log();
    let cateId = req.body.categoryId;
    let subId = req.body.subcategoryId;
    let extraId = req.body.extracategoryId;

    let brandData = await Brand.find({ categoryId: cateId, subcategoryId: subId, extracategoryId: extraId });
    let typeData = await Type.find({ categoryId: cateId, subcategoryId: subId, extracategoryId: extraId });
    return res.render('admin/ajexBeandType', {
        'brandData': brandData,
        'typeData': typeData
    })

}
