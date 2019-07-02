var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.post("/", function(req, res) {
  console.log(req);
  console.log(9999999999999);
  console.log(res);
  res.send("hello world");
});

var port = 3001;

app.listen(port, function() {
  console.log("Express listening on port " + port + " ...");
});
