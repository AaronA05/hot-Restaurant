var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3200;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var tableRes = [];
var waitRes = [];

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/add", function(req, res){
	res.sendFile(path.join(__dirname, "add.html"));
});

//app.get("/api/tables")

//app.get("api/wait")

app.get("/view", function(req, res){
	res.sendFile(path.join(__dirname, "view.html"));
})

app.get("/api/tables", function(req, res){
	res.json(tableRes);
});

app.get("/api/wait", function(req, res){
	res.json(waitRes);
});


app.listen(PORT, function(){
	console.log("App listening on port: " + PORT);
})

app.post("/api/add", function(req, res){
	var newRes = req.body;

	console.log(newRes);

	if(tableRes.length < 5){
		tableRes.push(newRes);
		res.json(newRes);
	}

	if(tableRes.length >= 5 ){
		waitRes.push(newRes);
		res.json(newRes);
	}

	console.log("Tables: " + JSON.stringify((tableRes)));

})

//res.json({object: to send})