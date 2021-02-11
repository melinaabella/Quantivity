const express = require('express');
const router = express.Router();
const path = require('path');

//promise wrapper for the readFile function
const readFile = (fileName, encoding) => {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, encoding, (err, data) => {
			if (err) {
				return reject(err);
			} else {
				resolve(data);
			}
		})
	});
};

//Get about page
router.get('/', (req, res, next) => {

	res.sendFile(path.join(__dirname + '/../public/html/about.html'));
	/*
	readFile(__dirname + '/../public/html/about.html').then(contents => {
		res.send(contents);
	}).catch(err => {
		console.log(`Unable to read /about.html: ${err}`);
		res.status(500);
		res.send(err);
		return;
	});
	*/
});

module.exports = router;