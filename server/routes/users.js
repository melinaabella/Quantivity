const { response } = require('express');
var express = require('express');
var router = express.Router();
var database = require('../bin/db');

/* GET users listing. */
router.get('/', function(req, res, next) {

});

//login account
router.get('/login/:user_id', (req, res, next) => {
	console.log("recieved log in request");
	if (req.body != null) {
		database.getModels().User.find({email: req.params.user_id}).then((results) => {
			console.log(results);
			if (results.length < 1) {
				res.sendStatus(404);
			} else {
				res.json(results[0]);
			}
		})
	}
});

//account creation
router.post('/create/:user_id', (req, res, next) => {
	//req has form data in it
	if (req.body != null) {
		let models = database.getModels();
		models.User.find({email: req.body.email}).then((results) => {
			if (results.length == 0) {
				let newUser = new (database.getModels()).User({...req.body});
				newUser.save().catch((error) => {
					console.log(error);
				});
				console.log('created new User' + newUser);
				res.sendStatus(200);
			} else {
				//account already exists
				console.log('account already exists!');
				res.sendStatus(205);
			}
		}).catch((error) => {
			console.log(error);
			res.sendStatus(500);
		});
	} else {
		res.sendStatus(500);
	}
});

router.post('/update/:user_id', (req, res, next) => {
	
});

//account deletion
router.delete('/delete/:user_id', (req, res, next) => {

});

module.exports = router;
