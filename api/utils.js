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

/* takes in an array and filters out all elems without 10 or 11 digits (normal length of a phone number) */
const filterPhone = (arr) =>
  arr.filter((elem) => elem.length == 11 || elem.length == 10);

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

function filterData(inSet) {
  var emails = filterEmails(inSet);
  phoneNums = [];

  inSet.forEach((elem) => {
    var newElem = stripChars(elem);
    phoneNums.push(newElem);
  });

  var phoneNumsCleaned = filterBlanks(phoneNums);

  phoneNumsFiltered = filterPhone(phoneNumsCleaned);

  const result = emails.concat(phoneNumsFiltered);

  console.log(result);

  return result;
}

module.exports = {
  removeHttps,
  stripChars,
  filterNulls,
  filterEmails,
  filterUrls,
  sanitizeUrl,
  filterBlanks,
  filterData,
};
