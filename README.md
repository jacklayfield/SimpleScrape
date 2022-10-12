# SimpleScrape

Overview: <br />
------------------------------------------------------------------------------------- 
Tool used to scrape the web, looking to collect information in order to connect people based of similar business interests or interests in general. <br />

To do: <br />
------------------------------------------------------------------------------------- 
Develop single page search DONE <br />
-> Contact page traversal PROG <br />
Refine keyword search READY <br />
-> Use puppeteer or other tool to beter navigate DONE <br />
Develop feature to generate related keywords READY <br />
Set up middle-ware to link api to client. DONE <br />
Mobile compatability PROG <br>
Scrape Card functionality READY <br>
User privileges and profile PROG <br>

Set up / running instructions: <br />
------------------------------------------------------------------------------------- 
Pre-reqs: Node.js, npm, VSCode (reccomended) <br />
Run front end in "SimpleScrape/client" with "npm start" <br />
Run backend end in "SimpleScrape/api" with "npm start" <br />
Test backend individual files with "node (filename)" <br />
Send request, navigate to "Scraper" page and insert keyword <br />

Notes: <br />
------------------------------------------------------------------------------------- 
May be moving to client side processing <br />
Server side doesn't pose any benefit in our case, and current implementation <br />
isn't thread safe apparently <br />

UPDATE: <br />
After further research, it makes more sense to handle this outside the client <br />
Will need to look further into solutions <br />

UPDATE:  <br />
Will be using server side implementation. Will receive keyword, scrape data, and store on mongodb cluster to be accessed through requests. <br />
