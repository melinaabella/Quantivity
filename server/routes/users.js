var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

});

//view account
router.get('/:user_id').then((req, res, next) => {

});

//account creation
router.post('/:user_id').then((req, res, next) => {
	//req has form data in it
	
	//check the database if the account already exists
	//if doesn't create account, send 200
	//else respond with 103
});

//account deletion
router.delete('/:user_id').then((req, res, next) => {

});

module.exports = router;
