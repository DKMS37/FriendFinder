
var friends = require('../data/friends');
// console.log(friends);
module.exports = function(app) {
	//whenever the user goes to the api/friends url go ahead and display the tableData in json format
	app.get('/api/friends', function(req, res) {
		res.json(friends);
		// console.log("friends[0].scores[0]: " + friends[0].scores[0]);

    });
    app.post('/api/friends', function(req, res) {
        var friend = req.body;
        friends.push(friend)
        res.json(true);

    });
}