const mongoose = require('mongoose');

const extracategorySchema = mongoose.Schema({

    extracategory_name: {
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
const ExtraCategory = mongoose.model('ExtraCategory', extracategorySchema);

module.exports = ExtraCategory;