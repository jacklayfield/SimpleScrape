const router = require("express").Router();
const ScrapeData = require("../models/ScrapeData");

router.post("/", async (req, res) => {
  const newData = new ScrapeData(req.body);
  try {
    const savedNewData = await newData.save();
    res.status(200).json(savedNewData);
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
