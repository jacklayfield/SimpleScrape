# SimpleScrape

Overview: <br />

---
```diff
! ANNOUNCEMENT: For ethical reasons, this project is being put on hold, and will not be released. Due to the nature of this tool, there is no good way to prevent people from using it for spamming purposes. Until a proper solution is developed to acheive the intended purpose (listed below) this project will be no longer supported. Currently, plans are in development to create a system that attempts to acheive a select few "matches" that are high quality results, thus preventing people from building email/phone number/social media lists. 
```
Tool used to scrape the web, looking to collect information in order to connect people based of similar business interests or interests in general. <br />

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
