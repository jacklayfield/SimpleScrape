# SimpleScrape

Overview: <br />
------------------------------------------------------------------------------------- 
Tool used to scrape the web, looking to collect information in order to connect people based of similar business interests or interests in general. <br />

To do: <br />
------------------------------------------------------------------------------------- 
Develop single page search <br />
-> Contact page traversal <br />
Refine keyword search <br />
-> Use puppeteer or other tool to beter navigate <br />
Develop feature to generate related keywords <br />
Set up middle-ware to link api to client. <br />

Set up / running instructions: <br />
------------------------------------------------------------------------------------- 
Pre-reqs: Node.js, npm, VSCode (reccomended) <br />
Run front end in "SimpleScrape/client" with "npm start" <br />
Run backend end in "SimpleScrape/api" with "npm start" <br />
Test backend individual files with "node <filename>"

Notes: <br />
------------------------------------------------------------------------------------- 
May be moving to client side processing <br />
Server side doesn't pose any benefit in our case, and current implementation <br />
isn't thread safe apparently <br />
