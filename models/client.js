const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

exports.ClientSchema = ClientSchema;
