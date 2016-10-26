var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());

var controller = require("./controllers/routes")(app);

app.listen(port, function(){
	console.log("Listening on "+ port);
});
