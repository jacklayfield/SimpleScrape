const cheerio = require("cheerio");
const fetch = require("node-fetch");

//helper methods
const { filterEmails, filterUrls, sanitizeUrl } = require("./utils");

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

async function scrapeSearchEngine(keyword) {
  var urls = [];
  //set cookies (currently not functional)
  // const opts = {
  //   headers: {
  //     cookie: "SRCHHPGUSR; NRSLT=100",
  //   },
  // };
  const response = await fetch(
    "https://www.bing.com/search?q=" + keyword
    // opts
  );
  const body = await response.text();
  const $ = cheerio.load(body);

  //parse html to find links
  $(".b_algo cite").each((_, e) => {
    let row = $(e).text().replace(/(\s+)/g, " ");
    // console.log(`${row}`);
    urls.push(`${row}`);
  });

  // const urlTags = filterUrls(urls);
  // const urlTagsClean = sanitizeUrl(urlTags);

  return urls;
}

async function main() {
  res = await scrapeSearchEngine("guitar");
  console.log(res);
}

main();
