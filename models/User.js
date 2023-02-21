const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    username: {
        type: String, required: true,
    }, phone: {
        type: String, required: true,
    }, orders: {
        type: Array, required: true, default: []
    }, password: {
        type: String, required: true,
    }

});

exports.UserSchema = UserSchema;
