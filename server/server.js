var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var expenseController = require("./controllers/expenseController");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.use(bodyParser.json())
app.use("/api", expenseController);
app.listen(4568,function(){
    console.log("Started listening on port", 4568);
});

// Connect to mongodb database
mongoose.connect("mongodb://jetsetter:jetsetter@ds145379.mlab.com:45379/jetsetter");
