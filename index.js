const express = require("express");
const fileupload = require("express-fileupload");
const jsonwebtoken = require("jsonwebtoken");
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();
app.use(cors("*"));
app.use(bodyParser.json());
app.use(fileupload());
app.use(express.static("files"));
