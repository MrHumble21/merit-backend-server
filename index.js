const express = require("express");
const fileupload = require("express-fileupload");
const jsonwebtoken = require("jsonwebtoken");
const bodyParser = require("body-parser");
const port = 8080;

const cors = require("cors");
const { OrderSchema } = require("./models/order");
const { ProductSchema } = require("./models/product");
const { CategorySchema } = require("./models/category");
const app = express();
app.use(cors("*"));
app.use(bodyParser.json());
app.use(fileupload());
app.use(express.static("files"));

app.post("/create_category", async (req, res) => {
  try {
    const category = await CategorySchema.create({ title: req.body.title });
    res.json({ category: category });
  } catch (error) {
    console.log(error);
  }
});

app.post("/create_product", async (req, res) => {
  try {
    const product = await ProductSchema.create(req.body);
    res.json({ product: product });
  } catch (error) {
    console.log(error);
  }
});

app.post("/create_order", async (req, res) => {
  try {
    const order = await OrderSchema.create(req.body);
    res.json({ order: order });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, (err) => {
  console.log("server listening on port" + port);
});
