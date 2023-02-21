const mongoose = require("mongoose");
const {Schema} = mongoose;

const ClientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    isTopClient: {
        type: Boolean,
        required: true,
        default: false,
    }

});

exports.ClientSchema = ClientSchema;
