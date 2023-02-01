const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect("mongodb://127.0.0.1:27017");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const weddingRouter = require("./routes/weddingRsvp.js");

app.use("/weddingRsvp", weddingRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
