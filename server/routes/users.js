var express = require('express');
var router = express.Router();
var database = require('../bin/db');

/* GET users listing. */
router.get('/', function(req, res, next) {

});

//view account
router.get('/:user_id', (req, res, next) => {

});

//account creation
router.post('/:user_id', (req, res, next) => {
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
	
	//check the database if the account already exists
	//if doesn't create account, send 200
	//else respond with 103
});

//account deletion
router.delete('/:user_id', (req, res, next) => {

});

module.exports = router;
