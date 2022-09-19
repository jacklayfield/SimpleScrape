const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const bspnRoutes = express.Router();
const PORT = 4000;
const scraper = require("./scraper");

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("Server successfully started, running on Port: " + PORT);
});

app.post("/data", async (req, res) => {
  try {
    console.log("Connected");
    console.log(req.body);
    const theData = await scraper.main(req.body.keyword);
    console.log("data" + theData);

    res.status(200).json(theData);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/data", async (req, res) => {
  try {
    console.log("Connected");
    console.log(req.body);
    const theData = await scraper.main(req.body.keyword);
    console.log("data" + theData);

    res.status(200).json(theData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/data=:dataid", async (req, res) => {
  try {
    const scrapeData = await ScrapeData.find({
      scrapeData: { $regex: req.params.scrapeData },
    });
    res.status(200).json(score);
  } catch (error) {
    res.status(500).json(error);
  }
});
