const express = require("express");
const fileupload = require("express-fileupload");
const jsonwebtoken = require("jsonwebtoken");
const bodyParser = require("body-parser");
const port = 8080;

const cors = require("cors");
const app = express();
app.use(cors("*"));
app.use(bodyParser.json());
app.use(fileupload());
app.use(express.static("files"));

app.post("/create_category", async (req, res) => {
  try {
    const category = await CategoryModel.create({ title: req.body.title });
    res.json({ category: category });
  } catch (error) {
    console.log(error);
  }
});

app.post("/create_product", async (req, res) => {
  try {
    const category = await ProductModel.create({ title: req.body.title });
    res.json({ category: category });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, (err) => {
  console.log("server listening on port" + port);
});
