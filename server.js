const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = 8080;

function handleRequest(request, response) {
  response.end("Path Hit: " + request.url);
}

const server = http.createServer(handleRequest);


//request response function
function handleRequest(req, res) {

  //read index.html file
  fs.readFile(__dirname + "/public/notes", function(err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}




// app.get("/", function(req, res) {
//     res.send("Note Taker");
//   });



//-----------------------------------

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });