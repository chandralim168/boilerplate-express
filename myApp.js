let express = require('express');
let app = express();
console.log("Hello World");



app.get("/", (req, res) => {
    res.send("Hello Express");
  });
console.log("Hello World");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
































 module.exports = app;
