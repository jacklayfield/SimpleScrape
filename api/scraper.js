const cheerio = require("cheerio");
const { json } = require("express");
const fetch = require("node-fetch");
const puppeteer = require("puppeteer");

//helper methods
const {
  filterEmails,
  filterUrls,
  sanitizeUrl,
  filterBlanks,
} = require("./utils");

//all tags
let tags = [];

/* calls scrapeSingleSite for all urls passed */
async function scrapeSites(urls) {
  let start = Date.now();
  //loop through urls. Must use loop in order to await.
  for (let i = 0; i < urls.length; i++) {
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
  var contactPage = false;
  // console.log(body);

  //grab <a> tags, add them to tags list
  $("a").each((_, e) => {
    let row = $(e).text().replace(/(\s+)/g, " ");
    // console.log(`${row}`);
    tags.push(`${row}`);

    /* checking for contact tab if so, record it. 
    (Do the check here to avoid unnecessarily opening a Pupeteer browser for non-existent contact page) */
    if (`${row}`.includes("Contact")) {
      console.log(`${row}`);
      console.log("success");
      contactPage = true;
    }

    if (contactPage) {
      contactPageScrape(url);
    }
  });

  /* Will open a headless puppeteer browser to navigate to and extract contact information */
  async function contactPageScrape(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url);
  }

  /* IDEA: Use puppeteer to navigate to a contacts page if one is found after an initial parse through */
}
/* New scraper for the Search engine

Unfortunately, node-fetch does not retreive bing results with & tags properly
Therefore, we must switch to puppeteer headless browser for now. 

*/
async function scrapeSearchEngine(keyword) {
  let start = Date.now();
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  var num_res = 1;

  const all_sites = [];

  //traverse through first 8 pages of results
  for (let i = 0; i < 8; i++) {
    await page.goto(
      "https://www.bing.com/search?q=" +
        keyword +
        "&first=" +
        num_res +
        "&FORM=PERE"
    );

    // console.log(keyword + " " + i);

    const data = await page.evaluate(function () {
      const events = document.querySelectorAll(".b_algo cite");
      const cur_sites = [];

      for (let j = 0; j < events.length; j++) {
        cur_sites.push(events[j].innerText);
      }
      return cur_sites;
    });

    // console.log(data);
    num_res += data.length;
    // console.log(num_res);

    all_sites.push(data);
  }

  let flatArray = [].concat(...all_sites);
  let finalArray = filterBlanks(flatArray);

  await browser.close();

  let time = Date.now() - start;
  console.log(
    "Execution time: " +
      time / 1000 +
      " seconds, " +
      finalArray.length +
      " results retrieved"
  );

  return finalArray;
}

async function main(keyword) {
  const res = await scrapeSearchEngine(keyword);

  // res = await scrapeSingleSite("https://www.southerncrosskitchen.com");
  // for (let i = 0; i < 2; i++) {
  //   console.log(`Waiting ${i} seconds...`);
  //   await sleep(i * 1000);
  // }
  return res;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  main,
};

// main();
