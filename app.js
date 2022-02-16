//express required to create express application
const express = require("express");
const app = express;

//express routes
const routes = require("./router");

//hostname and port to view app
//const hostname =  "127.0.0.1";
//const port = 4200;

//directory for other frontend files
app.use(express.static("public"));

//route for application
app.use(routes);

//connection to specified port
app.listen(port, () => {
    console.log(`Server is listening at http://${hostname}:${port}/`);
})