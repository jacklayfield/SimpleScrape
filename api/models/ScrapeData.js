const mongoose = require("mongoose");

const ScrapeDataSchema = new mongoose.Schema(
  {
    rawData: {
      type: [String],
      required: true,
    },
    rawWebsites: {
      type: [String],
      required: true,
    },
  }
  // { timestamps: true }
);

module.exports = mongoose.model("ScrapeData", ScrapeDataSchema);
