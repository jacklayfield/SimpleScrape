const router = require("express").Router();
const ScrapeData = require("../models/ScrapeData");
const scraper = require("../scraper");

//scrape and post
router.post("/", async (req, res) => {
  const newData = new ScrapeData(req.body);
  try {
    console.log(req.body.keyword);
    const theData = await scraper.main(req.body.keyword);
    console.log("data" + theData);
    //const savedNewData = await newData.save();
    res.status(200).json(savedNewData);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get a single scrape data json object by id
router.get("/id=:id", async (req, res) => {
  try {
    const theData = await ScrapeData.findById(req.params.id);
    res.status(200).json(theData);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all scrape data for a given user (to be implemented)
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let theData;
    if (username) {
      TheData = await ScrapeData.find({ creator: username });
    } else {
      theData = await ScrapeData.find();
    }
    res.status(200).json(theData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
