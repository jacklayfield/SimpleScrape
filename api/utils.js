const axios = require("axios");
const cheerio = require("cheerio");

//General utils

/* Requires url to be in https */
const removeHttps = (url) => url.replace(/^(https?:)?\/\//, "https://");

/* strips away non-numeric characters */
const stripChars = (num) => num.replace(/\D/g, "");

/* takes in an array and filters out null values */
const filterNulls = (arr) => arr.filter((elem) => elem !== null);

/* takes in an array and filters out all elems without "@" */
const filterEmails = (arr) => arr.filter((elem) => elem.includes("@"));

//DOM parsing

module.exports = { removeHttps, stripChars, filterNulls, filterEmails };
