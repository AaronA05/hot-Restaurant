var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3200;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/add", function(req, res){
	res.sendFile(path.join(__dirname, "add.html"));
});


app.listen(PORT, function(){
	console.log("App listening on port: " + PORT);
})