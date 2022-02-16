//necessary modules
const svIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");

//express and router
const express = require('express');
const router = express.Router();

//route to serve index.html
router.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    //make contents of index.html into a variable
    let fileContents = fs.readFileSync("./public/index.html", "utf8");
    //send response with index.html file
    response.write(fileContents);
    response.end();
})

//route to generate filler ipsum text and reload updated index.html file
router.post('/', (request, response) => {
    request.on("data", function (inputValue) {
        //make POST data into readable string
        let query = inputValue.toString(); //so, numberOfParagraphs = 2
        //parse query into key/value pair and store value of numberOfParagraphs in variable
        let numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
        //generate ipsum text with getAllParagraphs function
        let svIpsumText = svIpsum.getAllParagraphs(numberOfParagraphs);
        //get contents of index.html into variable
        let fileContents = fs.readFileSync("./public/index.html", "utf8");
        //replace placeholder <div> with new filler text
        fileContents = fileContents.replace("<div class='placeholder-div'></div>", svIpsumText);
        response.setHeader('Content-Type', 'text/html');
        //send response with modified index.html file
        response.write(fileContents);
        response.end();
    });
});

module.exports = router;