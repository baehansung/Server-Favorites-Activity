// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequestFoods);
var server3 = http.createServer(handleRequestFrameworks);
var server4 = http.createServer(handleRequestMovie);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/../html/index.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}


// Create a function for handling the requests and responses coming into our server
function handleRequestFoods(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "../html/foods.html", function(err, data) {
  
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  
// Create a function for handling the requests and responses coming into our server
function handleRequestFrameworks(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "../html/frameworks.html", function(err, data) {
  
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  

// Create a function for handling the requests and responses coming into our server
function handleRequestMovie(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "../html/movies.html", function(err, data) {
  
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  


// Starts our server
server1.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});

// server2.listen(PORT, function() {
//     console.log("Server is listening on PORT: " + PORT);
// });

// server3.listen(PORT, function() {
//     console.log("Server is listening on PORT: " + PORT);
// });
  
// server4.listen(PORT, function() {
//     console.log("Server is listening on PORT: " + PORT);
// });
  