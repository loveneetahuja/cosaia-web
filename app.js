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
    var data1 = {
        "title": "Projects", 
        "description": "Cosaia Private Limited is a Design, Web Development and Digital Marketing Company based in India with several years of experience and clients around the globe. Our large team of highly skilled developers, designers and digital marketing experts will take your business to the next level.", // meta description
    };
    res.render("proj" , {'data': data1});
})

app.get("/blogs", function(req, res){
    var data1 = {
        "title": "Blogs", 
        "description": "Cosaia Private Limited is a Design, Web Development and Digital Marketing Company based in India with several years of experience and clients around the globe. Our large team of highly skilled developers, designers and digital marketing experts will take your business to the next level.", // meta description
    };
    res.render("blogs" , {'data': data1});
})

app.get("/contact_us", function(req, res){
    var data1 = {
        "title": "Contact Us", 
        "description": "Cosaia Private Limited is a Design, Web Development and Digital Marketing Company based in India with several years of experience and clients around the globe. Our large team of highly skilled developers, designers and digital marketing experts will take your business to the next level.", // meta description
    };
    res.render("contact" , {'data': data1});
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
    var data1 = {
        "title": "Outsource your business, GROW.", 
        "description": "The global outsourcing market has been growing every day and includes businesses of different sizes, such as marketing, IT, accounts, HR, etc. If you want to expand your business, lower your costs and have a bigger team then outsourcing your work can help you.Let’s take a look at how outsourcing can help YOU.", // meta description
    };
    res.render("firstblog" , {'data': data1});
})

app.get("/secondblog", function(req, res){
    var data1 = {
        "title": "A company’s blueprint to succeed in this modern digital world", 
        "description": "Whether you are working individually or you are a small or a big company, in order for your business to thrive, you need to take some measures to make it popular among your targeted audience. In this modern yet highly competitive world, it might be difficult to grow and succeed without taking some extraordinary measures. In the following context, we are going to take a look at the importance of branding, web development, and some aspects of digital marketing.", // meta description
    };
    res.render("secondblog" , {'data': data1});
})

app.get("/thirdblog", function(req, res){
    var data1 = {
        "title": "Invest in SEO, Excel", 
        "description": " If you are starting a new business or you already are running a business and you are looking for ways to get your business to new heights of success then you have to invest in SEO. In the current highly competitive market, you might truly feel like you don’t exist, and as of now it might seem quite impossible to get your business into the list of the top-ranking ones.", // meta description
    };
    res.render("thirdblog" , {'data': data1});
})


app.get("/thankyou", function(req, res){
    res.render("thankyou");
})


app.get("/jobs", function(req, res){
    var data1 = {
        "title": "Career at Cosaia", 
        "description": "Cosaia Private Limited is a digital marketing agency based in India with clients all over the globe. We provide services such as Social Media Marketing, Email Marketing and Search Engine Optimization (SEO).", // meta description
    };
    res.render("jobs" , {'data': data1});
})




app.get("/robots.txt", function(req, res){
    res.sendFile(path.resolve("robots.txt"));
    });


app.get("/sitemap.xml", function(req, res){
        res.sendFile(path.resolve("sitemap.xml"));
        });    
