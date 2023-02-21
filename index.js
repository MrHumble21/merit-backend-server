const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const bodyParser = require("body-parser");
const port = 8080;

const cors = require("cors");
const {CategoryModel, ProductModel, ClientModel, UserModel} = require("./database/database");
const app = express();
app.use(cors("*"));
app.use(bodyParser.json());
app.use(express.static("files"));

app.post("/create_category", async (req, res) => {
  try {
    const category = await CategoryModel.create(req.body);
    res.json({ category: category });
  } catch (error) {
    console.log(error);
  }
});

app.post("/create_product", async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.json({ product});
  } catch (error) {
    console.log(error);
  }
});




app.post('/create_user', async (req, res)=>{
  try {
    const new_user =  await UserModel.create(req.body);
    res.json({ new_user: new_user})
  } catch (error) {
    console.log(error);
  }
})

app.post('/create_client', async (req, res)=>{
  try {
    const new_client =  await ClientModel.create(req.body);
    res.json({ new_client})
  } catch (error) {
    console.log(error);
  }
})
app.post('/sign_in', async (req, res)=>{
  try {
    const user =  await UserModel.create(req.body);
    if(user.username === req.body.username && user.password === req.body.password){
      res.json({ user: user}).status(200)
    }else{
      res.status(401)
    }
  } catch (error) {
    console.log(error);
    res.status(500)
  }
})
app.listen(port, (err) => {
  console.log("server listening on port" + port);
});

//kjkjn