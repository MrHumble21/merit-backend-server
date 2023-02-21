const mongoose = require("mongoose");
const { connectionString } = require("../constants/constants");
const { ClientSchema } = require("../models/client");
const { CategorySchema } = require("../models/category");
const { Productchema } = require("../models/product");
const { UserSchema } = require("../models/User");
// const {  } = require("../models/");

mongoose.set("strictQuery", false);
mongoose.connect(connectionString);

const Client = mongoose.model("Client", ClientSchema);
const Category = mongoose.model("Category", CategorySchema);
const Product = mongoose.model("Product", Productchema);
const User = mongoose.model("User", UserSchema);


exports.ClientModel = Client;
exports.CategoryModel = Category;
exports.ProductModel = Product;
exports.UserModel = User;

