var friends = require('../data/friends.js');
console.log(friends);
module.exports = function(app) {
	//whenever the user goes to the api/tables url go ahead and display the tableData in json format
	app.get('/api/friends', function(req, res) {
		res.json(friends);
		console.log("friends[0].scores[0]: " + friends[0].scores[0]);

    });
    app.post('../data/friends.js', function(req, res) {
		console.log(req.body);

    });
}