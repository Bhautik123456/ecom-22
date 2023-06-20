const mongoose = require('mongoose');
const AVATAR_PATH = "/uploads/category";

const multer = require('multer');

const path = require('path');

const categorySchema = mongoose.Schema({
    category_name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
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
        cb(null, path.join(__dirname, '..', AVATAR_PATH))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

categorySchema.statics.uploadedAvatar = multer({ storage: storage }).single('avatar');

categorySchema.statics.avatarPath = AVATAR_PATH;

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;