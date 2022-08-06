const cheerio = require("cheerio");
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

// async function scrapeSearchEngine(keyword) {
//   var urls = [];
//   //set cookies (currently not functional)
//   // const opts = {
//   //   headers: {
//   //     cookie: "SRCHHPGUSR; NRSLT=100",
//   //   },
//   // };
//   const response = await fetch(
//     "https://www.bing.com/search?q=" + keyword + "&first=11&FORM=PERE"
//     // opts
//   );
//   const body = await response.text();
//   const $ = cheerio.load(body);

//   //parse html to find links
//   $(".b_algo cite").each((_, e) => {
//     let row = $(e).text().replace(/(\s+)/g, " ");
//     // console.log(`${row}`);
//     urls.push(`${row}`);
//   });

//   // const urlTags = filterUrls(urls);
//   // const urlTagsClean = sanitizeUrl(urlTags);

//   return urls;
// }

/* New scraper for the Search engine

Unfortunately, node-fetch does not retreive bing results with & tags properly
Therefore, we must switch to puppeteer headless browser for now. 

*/
async function scrapeSearchEngine(keyword) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  var num_res = 1;

  const all_sites = [];

  //traverse through first 8 pages of results
  for (i = 0; i < 8; i++) {
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

      for (i = 0; i < events.length; i++) {
        cur_sites.push(events[i].innerText);
      }
      return cur_sites;
    });

    console.log(data);
    num_res += data.length;
    console.log(num_res);

    all_sites.push(data);
  }

  let flatArray = [].concat(...all_sites);
  let finalArray = filterBlanks(flatArray);

  console.log(flatArray);
  console.log(flatArray.length);

  console.log(finalArray);
  console.log(finalArray.length);

  browser.close();
}

async function main() {
  res = await scrapeSearchEngine("dog");
  console.log(res);
}

main();
