const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;
const productsSchema = new Schema({
  imgUrl: { type: String },
  name: { type: String },
  price: { type: String },
});
const Products = mongoose.model("products", productsSchema);

//GET ALL
app.get("/products", (req, res) => {
  Products.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//GET BY ID
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  Products.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      res.status(500).json({ message: err });
    }
  });
});

//DELETE
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  Products.findByIdAndDelete(id, (err, docs) => {
    if (!err) {
      res.send("Deleted!");
    } else {
      res.status(404).json({ message: err });
    }
  });
});

//ADD
app.post("/products", (req, res) => {
  const products = new Products
  ({
    imgUrl: req.body.imgUrl,
    name: req.body.name,
    price: req.body.price,
  });
  products.save();
  res.send({ message: "Done!" });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;
const url = process.env.CONNECTION_URL.replace(
  "<password>",
  process.env.PASSWORD
);
mongoose.set("strictQuery", true);
mongoose.connect(url, (err) => {
  if (!err) {
    console.log("DB connect");
    app.listen(PORT, () => {
      console.log("server start");
    });
  }
});
