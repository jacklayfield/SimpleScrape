const request = require("request");
const cheerio = require("cheerio");

const { filterEmails } = require("./utils");

request(
  "https://www.nutstop.com/product-category/nuts-seeds/peanuts/",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      var tags = [];

      $("a").each((_, e) => {
        let row = $(e).text().replace(/(\s+)/g, " ");
        console.log(`${row}`);
        tags.push(`${row}`);
      });
    }

    console.log(filterEmails(tags));
  }
);

//Will include main function calls

//Helper functions here

//Extraction
