const express = require('express');
const router = express.Router();
const path = require('path');
const debug = require('debug')('server:server');
const fs = require('fs/promises');

router.get('/get', (req, res, next) => {
	fs.readFile(__dirname + '/../userData.json').then((contents) => {
		let obj = (JSON.parse(contents));
		return res.json(obj);
	}).catch((err) => {
		next(err);
	});
});

router.post('/set', (req, res, next) => {
	let obj = {
		userdata: []
	};
	obj.userdata = req.body;
	//console.log(obj);
	fs.writeFile(__dirname + '/../userData.json', JSON.stringify(obj, null, 4)).then(() => {
		res.sendStatus(200);
	}).catch((err) => {
		console.log(err);
		res.sendStatus(500);
	});
});

module.exports = router;