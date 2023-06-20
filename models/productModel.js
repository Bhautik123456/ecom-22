const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path')
const singalImage = '/uploads/singalImage'
const multipalImage = '/uploads/multipalImage'

const productSchema = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory",
        required: true,
    },
    extracategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ExtraCategory",
        required: true,
    },
    brandId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
    },
    typeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Type",
        required: true,
    },
    product_name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    old_price: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        required: true
    }
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        if (file.fieldname == 'image') {
            cb(null, path.join(__dirname, '..', singalImage))
        } else {
            cb(null, path.join(__dirname, '..', multipalImage))
        }
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

productSchema.statics.uploadedAvatar = multer({ storage: storage }).fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 5 }]);

productSchema.statics.singalPath = singalImage;
productSchema.statics.multipalPath = multipalImage;

const Product = mongoose.model('Product', productSchema);

module.exports = Product;