const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    brand_name: {
        type: String,
        required: true,
    },
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
const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;