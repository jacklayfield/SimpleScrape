# SimpleScrape
-------------------------- <br/>

# Demo: https://youtu.be/4aj7e_x8mME

Purpose: Tool used to scrape the web, looking to collect information in order to connect people based of similar business interests or interests in general. <br />

Overview: <br />

This tool was originally supposed to use keywords to gather lists of contact information that individuals could use to acheive the above purpose. However, it was realized that long lists of contact information can and would be most likely used for spam and other malicious intent. Therefore, the approach was changed to only return a few higher quality results. Seeing that the value in this would be not as high, this turned into more of a proof of concept type project. Below explains more about what's going on behind the scenes: <br />

How it works: <br />

The user will input a keyword related to a business interest or interest.  <br />
An API call will pass along this keyword through the body of the request. <br />
In the request, it will call upon the scraper script, passing in the keyword. <br />
The scraper script will then use puppeteer and Bing to gather a list of relevant websites. <br />
These websites will then individually be scraped using pupetter and cheerio. It will look for contact information. <br />
The websites and contact information data is cleaned and sorted. <br />
All of this data is loaded into collections in Mongo. <br />
These collections are then returned to the frontend where they can be maniuplated (limiting results to thwart spammers) and rendered in the report. <br />

What can be improved: <br />

Gather higher quality results: Allow for the user to input additional keywords for more tailored results. Use techniques to gather additional related keywords to query in order to build a bigger pool of results. <br />
Run time: Look into other techniques and tools for better run time. Puppeteer can be slow.  <br />

-------------------------- <br/>

To do: <br />

---

Develop single page search DONE <br />
-> Contact page traversal PROG <br />
Refine keyword search READY <br />
-> Use puppeteer or other tool to beter navigate DONE <br />
Develop feature to generate related keywords READY <br />
Set up middle-ware to link api to client. DONE <br />
Mobile compatability DONE <br />
Scrape Card functionality READY <br />
User privileges and profile PROG <br />
Clean data READY <br />
Correctly handle an errant search engine scrape READY <br />

Set up / running instructions: <br />

---

Pre-reqs: Node.js, npm, VSCode (reccomended) <br />
Run front end in "SimpleScrape/client" with "npm start" <br />
Run backend end in "SimpleScrape/api" with "npm start" <br />
Test backend individual files with "node (filename)" <br />
Send request, navigate to "Scraper" page and insert keyword <br />

Notes: <br />

---

May be moving to client side processing <br />
Server side doesn't pose any benefit in our case, and current implementation <br />
isn't thread safe apparently <br />

UPDATE: <br />
After further research, it makes more sense to handle this outside the client <br />
Will need to look further into solutions <br />

UPDATE: <br />
Will be using server side implementation. Will receive keyword, scrape data, and store on mongodb cluster to be accessed through requests. <br />
