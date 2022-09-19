const router = require("express").Router();
const ScrapeData = require("../models/ScrapeData");

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

module.exports = router;
