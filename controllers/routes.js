var path = require('path');

module.exports = function(app){

	app.get('/planner', function(req, res){
		res.sendFile(path.join(__dirname + '/../views/planpage.html'));
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../views/home.html'));
	});

}