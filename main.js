const express = require("express");
const mongoose = require("mongoose");
const data = require("./model.js");

require("dotenv").config();

const uri = process.env.URI;
mongoose
  .connect(uri)
  .then(() => console.log("Successfully Connected to Mongo"))
  .catch((err) => console.log(err));

const app = express();
const port = 3000;

app.use(express.json());

app.post("/add-org", async (req, res) => {
  try {
    const { walletAddress, name, description, target } = req.body;
    const newData = new data({ walletAddress, name, description, target });
    await newData.save();
    return res.status(201).json({ message: "The entry have been created" });
  } catch (err) {
    res.status(400).json({
      message: "something went wrong while entering the data",
      error: err,
    });
  }
});

app.get("/get", async (req, res) => {
  var result = await data.find({});
  return res
    .status(201)
    .json({ message: "successfully executed", data: result });
});

app.get("/get/:wallet", async (req, res) => {
  const wallet = req.params.wallet;
  var result = await data.find({ walletAddress: wallet });
  return res
    .status(201)
    .json({ message: "successfully executed", data: result });
});

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "Pong", status: "server is up and running" });
});

app.listen(port, () => console.log("Server is up and running"));
