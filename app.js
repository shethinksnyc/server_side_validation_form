"use strict";

// dependencies
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const { engine } = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
const ProtonMail = require("protonmail-api");

// initialize app variable
const app = express();

// View engine set up
app.engine("handlebars", engine({ extname: ".hbs", defaultLayout: "" }));
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

//bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//create route
app.get("/", (req, res) => {
  res.render("contact");
});

//post route for submission
app.post("/send", (req, res) => {
  let output = `
  <p>You have a new message</p>
  <h3>Contact Details</h3>
  <ul> 
  <i>Name: ${req.body.name}</i>
  <i>Email: ${req.body.email}</i>
  </ul>
  <h3>Message: <p>${req.body.message}</p></h3>
`;
});

(async () => {
  const pm = await ProtonMail.connect({
    username: "oneMarketingStudios@protonmail.com",
    password: "Bullshit6868$",
  });

  await pm.sendEmail({
    to: "shethinksnyc@protonmail.com",
    subject: "Nodemailer Contact",
    body: output,
  });

  pm.close();
})();

//   setupemail data with unicode
// listen on a port
app.listen(3000, () => console.log("Server started..."));
