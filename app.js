var http = require("http");
var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
  console.log('Server is running on port 3000');
}
app.listen(port);

//App Config
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//Restful Routes
app.get("/", function(req, res){

    var data1 = {
        "title": "Web Development & Design Company India | Web & Mobile Application", 
        "description": "Cosaia Private Limited is a Design, Web Development and Digital Marketing Company based in India with several years of experience and clients around the globe. Our large team of highly skilled developers, designers and digital marketing experts will take your business to the next level.", // meta description
    };
    res.render("home", {'data': data1});
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

app.get("/development", function(req, res){
    var data1 = {
        "title": "Website Development Company India | Custom Web Development", 
        "description": "Cosaia Private Limited is a web development company based in India. We provide services such as website development, app development and custom web apps for businesses to automate growth.", // meta description
    };
    res.render("development" , {'data': data1});
})

app.get("/design", function(req, res){
    var data1 = {
        "title": "Website Designing Company India | Corporate Logo Design", 
        "description": "Cosaia Private Limited is a web design company based in India. We provide services such as logo design, branding, corporate identity, stationery design, packaging and UI/UX wireframing and prototyping.", // meta description
    };
    res.render("design", {'data': data1});
})

app.get("/digitalmarketing", function(req,res){
    var data1 = {
        "title": "Digital Marketing Company India | SEO services ", 
        "description": "Cosaia Private Limited is a digital marketing agency based in India with clients all over the globe. We provide services such as Social Media Marketing, Email Marketing and Search Engine Optimization (SEO).", // meta description
    };
    res.render("digital_marketing" , {'data': data1});

})

app.get("/firstblog", function(req, res){
    res.render("firstblog");
})

app.get("/secondblog", function(req, res){
    res.render("secondblog");
})

app.get("/thirdblog", function(req, res){
    res.render("thirdblog");
})


app.get("/thankyou", function(req, res){
    res.render("thankyou");
})


app.get("/jobs", function(req, res){
    res.render("jobs");
})



