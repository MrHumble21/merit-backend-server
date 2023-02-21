const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

exports.CategorySchema = CategorySchema;
