const axios = require("axios");
const cheerio = require("cheerio");

//General utils

/* Requires url to be in https */
const removeHttps = (url) => url.replace(/^(https?:)?\/\//, "https://");

/* strips away non-numeric characters */
const stripChars = (num) => num.replace(/\D/g, "");

/* takes in an array and filters out null values */
const filterNulls = (arr) => arr.filter((elem) => elem !== null);

//Request and Response

//DOM parsing
