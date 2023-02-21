const mongoose = require("mongoose");
const { connectionString } = require("../constants/constants");
const { ClientSchema } = require("../models/client");
const { CategorySchema } = require("../models/category");
const { ProductSchema } = require("../models/product");
const { UserSchema } = require("../models/User");
const { OrderSchema } = require("../models/order");
// const {  } = require("../models/");

mongoose.set("strictQuery", false);
mongoose.connect(connectionString);

const Client = mongoose.model("Client", ClientSchema);
const Category = mongoose.model("Category", CategorySchema);
const Product = mongoose.model("Product", ProductSchema);
const User = mongoose.model("User", UserSchema);
const Order = mongoose.model("Order", OrderSchema);

exports.ClientModel = Client;
exports.CategoryModel = Category;
exports.ProductModel = Product;
exports.UserModel = User;
exports.OrderModel = Order;
