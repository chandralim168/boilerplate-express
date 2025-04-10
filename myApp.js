let express = require('express');
let app = express();
require('dotenv').config();

/*
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
*/

// Normal route
// app.use(express.static(__dirname + "/public"));

// Assets at the /public route
// app.use("/public", express.static(__dirname + "/public"));

/*
app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});
*/

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  };
  
  res.json({
    message: response
  });
});




























 module.exports = app;
