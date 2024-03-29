const cheerio = require("cheerio");
const { json } = require("express");
const fetch = require("node-fetch");
const puppeteer = require("puppeteer");

// helper methods
const {
  filterEmails,
  filterUrls,
  sanitizeUrl,
  filterBlanks,
  filterData,
} = require("./utils");

// all tags

/* calls scrapeSingleSite for all urls passed */
async function scrapeSites(urls) {
  let combinedTags = [];
  // console.log("Here");
  let start = Date.now();
  //loop through urls. Must use loop in order to await.
  for (let i = 0; i < urls.length; i++) {
    const curTags = await scrapeSingleSite(urls[i]);
    combinedTags = combinedTags.concat(curTags);
    console.log(combinedTags.length);
  }
  let time = Date.now() - start;

  combinedTagsFiltered = filterData(combinedTags);
  console.log(combinedTagsFiltered);

  console.log("Execution time: " + time + " milliseconds");

  return combinedTagsFiltered;
}

/* Scrapes a single website's html and returns all <a> tags */
async function scrapeSingleSite(url) {
  let tags = [];
  console.log(url);
  if (url.includes("https://")) {
    const response = await fetch(url);
    const body = await response.text();
    const $ = cheerio.load(body);
    var contactPage = false;

    // grab <a> tags, add them to tags list
    $("a").each((_, e) => {
      let row = $(e).text().replace(/(\s+)/g, " ");
      // console.log(`${row}`);
      tags.push(`${row}`);

      /* checking for contact tab if so, record it. 
    (Do the check here to avoid unnecessarily opening a Pupeteer browser for non-existent contact page) */
      if (`${row}`.includes("Contact")) {
        console.log(`${row}`);
        //console.log("success");
        contactPage = true;
      }
    });

    //needs work
    $(".a").each(function () {
      var pageLinks = $(this).attr("href");
      console.log("page links: " + pageLinks);
    });

    if (contactPage) {
      // contactPageScrape(url);
    }
  }

  return tags;
}

/* Will open a headless puppeteer browser to navigate to and extract contact information */
async function contactPageScrape(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url);
}

/* New scraper for the Search engine

Unfortunately, node-fetch does not retreive bing results with & tags properly
Therefore, we must switch to puppeteer headless browser for now. 

*/
async function scrapeSearchEngine(keyword) {
  let start = Date.now();
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  var num_res = 1;

  const all_sites = [];

  // traverse through first 8 pages of results
  for (let i = 0; i < 8; i++) {
    await page.goto(
      "https://www.bing.com/search?q=" +
        keyword +
        "&first=" +
        num_res +
        "&FORM=PERE"
    );

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
      " results retrieved (Search Engine)"
  );

  // console.log("sites: " + finalArray)
  return finalArray;
}

async function main(keyword) {
  const res = await scrapeSearchEngine(keyword);
  const res2 = await scrapeSites(res);
  console.log(res2.length);
  return res2;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  main,
  scrapeSearchEngine,
};

async function test() {
  urls = [
    "https://www.nalp.org",
    "https://www.akc.org/dog-breeds/",
    "https://www.purina.com/cats/cat-breeds",
    "https://www.akc.org/dog-breeds/",
    "https://www.purina.com/cats/cat-breeds",
  ];
  const res = await scrapeSites(urls);
}

//test()
