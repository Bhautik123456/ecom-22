const mongoose = require('mongoose');

const subcategorySchema = mongoose.Schema({

    subcategory_name: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
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
const SubCategory = mongoose.model('SubCategory', subcategorySchema);

module.exports = SubCategory;