const express = require('express');
const router = express.Router();
const path = require('path');
const debug = require('debug')('server:server');
const fs = require('fs/promises');
const database = require('../bin/db');

router.get('/get', (req, res, next) => {
	database.getdb().db('quantivitydb').collection('test_collection').findOne({week: 20210404}).then((db_result) => {
		console.log(db_result);
		return res.json(db_result);
	}).catch((error) => {
		res.sendStatus(500);
		next(error);
	});
});

router.post('/set', (req, res, next) => {
	/*database.get().db('quantivitydb').collection('test_collection').findOne({week: 20210404}).then((result) => {
		console.log("Old data: ");
		console.log(result);
		console.log("New data: ");
		console.log(req.body);
		return database.get().db('quantivitydb').collection('test_collection').updateOne({week: 20210404}, req.body, {upsert: true});
	}).then((result) => {
		res.sendStatus(200);
	}).catch((error) => {
		res.sendStatus(500);
	})*/

	let obj = req.body;
	database.getdb().db('quantivitydb').collection('test_collection').updateOne({week: 20210404}, {$set : {week: req.body.week, catagories: req.body.catagories}}, {upsert: true}).then((result) => {
		res.sendStatus(200);
	}).catch((error) => {
		res.sendStatus(500);
	});
});

module.exports = router;