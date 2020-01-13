var http = require("http");
var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("home");
})

app.get("/projects", function(req, res){
    res.render("proj");
})

app.get("/blogs", function(req, res){
    res.render("blogs");
})

app.get("/contact_us", function(req, res){
    res.render("contact");
})