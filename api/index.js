const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const bspnRoutes = express.Router();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("Server successfully started, running on Port: " + PORT);
});
