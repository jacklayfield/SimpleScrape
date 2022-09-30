const axios = require("axios");
const cheerio = require("cheerio");

//General utils

/* Requires url to be in https */
const removeHttps = (url) => url.replace(/^(https?:)?\/\//, "https://");

/* strips away non-numeric characters */
const stripChars = (num) => num.replace(/\D/g, "");

/* takes in an array and filters out null values */
const filterNulls = (arr) => arr.filter((elem) => elem !== null);

/* takes in an array and filters out blank values */
const filterBlanks = (arr) => arr.filter((elem) => elem !== "");

/* takes in an array and filters out all elems without "@" */
const filterEmails = (arr) => arr.filter((elem) => elem.includes("@"));

/* takes in an array and filters out all elems without "www." */
const filterUrls = (arr) => arr.filter((elem) => elem.includes("www."));

/* takes in an array and filters out all elems with a length less than a normal phone # (10) */
const filterPhone = (arr) => arr.filter((elem) => elem.length >= 10);

/* takes in an array with strings containing urls and isolates them (useful for engines that don't make scraping easy)*/
function sanitizeUrl(arr) {
  tmpVals = [];

  arr.forEach((elem) => {
    var splitArr = elem.split(" ");
    tmpVals.push(filterUrls(splitArr)[0]);
  });

  retVals = [];

  tmpVals.forEach((elem) => {
    var splitArr = elem.split("www.");
    retVals.push(splitArr[1]);
  });

  return retVals;
}

function filterData() {
  var theArr = [
    "13048",
    "guy@ex.com",
    "gal@ex.com",
    "dogs",
    "1029394891",
    "bob",
    "59@b.com",
  ];
  var emailArr = filterEmails(theArr);

  phoneArr = [];

  theArr.forEach((elem) => {
    // var newElem = elem.stripChars();
    var newElem = stripChars(elem);
    phoneArr.push(newElem);
  });

  // var newArr1 = stripChars(newArr);
  var phoneArrNum = filterBlanks(phoneArr);

  phoneArrNumFiltered = filterPhone(phoneArrNum);

  const resArray = emailArr.concat(phoneArrNumFiltered);

  console.log(resArray);
}

filterData();

// array1 = ["eiosfj esiojf seof gghedwww.test.org grhse", "wwww.hello.net wfwef"];

// console.log(sanitizeUrl(array1));

module.exports = {
  removeHttps,
  stripChars,
  filterNulls,
  filterEmails,
  filterUrls,
  sanitizeUrl,
  filterBlanks,
};
