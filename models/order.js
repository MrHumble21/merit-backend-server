const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  clientId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  isDelivered: {
    type: Boolean,
    default: false,
    required: true,
  },
  orderedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

exports.OrderSchema = OrderSchema;
