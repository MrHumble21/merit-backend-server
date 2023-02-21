const mongoose = require("mongoose");
const {Schema} = mongoose;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    isPopular: {
        type: Boolean,
        default: false,
        required: true
    }


});

exports.CategorySchema = CategorySchema;
