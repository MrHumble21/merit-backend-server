const mongoose = require("mongoose");
const { connectionString } = require("../constants/constants");
const { ClientSchema } = require("../models/client");
const { CategorySchema } = require("../models/category");
const { Productchema } = require("../models/product");
// const {  } = require("../models/");

mongoose.set("strictQuery", false);
mongoose.connect(connectionString);

const Client = mongoose.model("Client", ClientSchema);
const Category = mongoose.model("Category", CategorySchema);
const Product = mongoose.model("Product", Productchema);


exports.ClientModel = Client;
exports.CategoryModel = Category;
exports.ProductModel = Product;

