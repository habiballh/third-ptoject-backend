const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");
app.set("view engine", "hbs");
app.use(express.static("public")); 
const viewsDirectory = path.join(__dirname, "../tem/views");
app.set("views", viewsDirectory);

const partialspath = path.join(__dirname, '../tem/partials');
hbs.registerPartials(partialspath);

// Home Page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    description: "This is the home page",
    message: "Welcome to our website!",
    img1: "images/cat-07.jpg",
  });
});

// Services Page
app.get("/services", (req, res) => {
  res.render("services", {
    title: "Services Page",
    description: "This is the services page",
    message: "These are our services!",
    img1: "images/cat-02.jpg",
  });
});

// About Us Page
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Us Page",
    description: "This is the about us page",
    message: "Learn more about us!",
    img1: "images/cat-03.jpg",
  });
});

// Contact Us Page
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Us Page",
    description: "This is the contact us page",
    message: "Get in touch with us!",
    img1: "images/cat-05.jpg",
  });
});

// Portfolio Page
app.get("/portfolio", (req, res) => {
  res.render("portfolio", {
    title: "Portfolio Page",
    description: "This is the portfolio page",
    message: "Check out our portfolio!",
    img1: "images/gallery-05.jpg",
  });
});

app.listen(port, () => {
  console.log("your app is listening on port 3000");
});
