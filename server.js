
const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// serves static app content from public directory
app.use(express.static("public"));

// parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sets handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// imports routes and gives server access to them
const routes = require("./controller/burgers_controller.js");

app.use(routes);

// start server so that it can begin listening to client reqs
app.listen(PORT, function() {
    // server side log wen our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});