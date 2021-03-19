const express = require('express');
const router = express.Router();
const path = require('path');
const debug = require('debug')('server:server');
const fs = require('fs/promises');

router.get('/', (req, res, next) => {
	fs.readFile(__dirname + '/../userData.json').then((contents) => {
		let obj = (JSON.parse(contents));
		console.log(obj);
		return res.json(obj);
	}).catch((err) => {
		console.log(err);
	});
});

module.exports = router;