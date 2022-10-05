const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const bspnRoutes = express.Router();
const PORT = 4000;
const scraper = require("./scraper");
const dotenv = require("dotenv");
const scrapeDataRoute = require("./routes/scrapeData");
const userRoute = require("./routes/user");

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/scrapeData", scrapeDataRoute);
app.use("/api/user", userRoute);

app.listen(PORT, () => {
  console.log("Server successfully started, running on Port: " + PORT);
});
