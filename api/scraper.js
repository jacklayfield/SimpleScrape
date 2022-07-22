const cheerio = require("cheerio");
const fetch = require("node-fetch");

//helper methods
const { filterEmails, filterUrls } = require("./utils");

//all tags
tags = [];

/* calls scrapeSingleSite for all urls passed */
async function scrapeSites(urls) {
  let start = Date.now();
  //loop through urls. Must use loop in order to await.
  for (i = 0; i < urls.length; i++) {
    await scrapeSingleSite(urls[i]);
  }
  let time = Date.now() - start;

  const emailTags = filterEmails(tags);
  // const urlTags = filterUrls(tags);

  console.log(tags);
  console.log(emailTags);
  console.log("Execution time: " + time + " milliseconds");
}

/* Scrapes a single website's html and returns all <a> tags */
async function scrapeSingleSite(url) {
  const response = await fetch(url);
  const body = await response.text();
  const $ = cheerio.load(body);
  // console.log(body);

  //grab <a> tags, add them to tags list
  $("a").each((_, e) => {
    let row = $(e).text().replace(/(\s+)/g, " ");
    // console.log(`${row}`);
    tags.push(`${row}`);
  });
}

scrapeSites([
  "https://www.nutstop.com/product-category/nuts-seeds/peanuts/",
  "https://www.lanierlawfirm.com/",
  "https://www.akc.org/dog-breeds/",
]);
