const express = require('express');
const router = express.Router();
const path = require('path');
const debug = require('debug')('server:server');
const fs = require('fs/promises');
const database = require('../bin/db');

router.get('/get/:user_id/:week', (req, res, next) => {
	let Users = database.getModels().User;
	let Grids = database.getModels().Grid;
	Users.findOne({email: req.params.user_id}).then((user) => {
		console.log("quering database: {user: " + req.params.user_id + ", week: " + req.params.week + "}");
		return Grids.findOne({user: req.params.user_id, week: req.params.week});
	}).then((grid) => {
		console.log("database results: " + grid);
		res.json(grid);
	}).catch((error) => {
		console.log(error);
		res.sendStatus(404);
	});
});

router.post('/set/:user_id/:week', (req, res, next) => {
	let Users = database.getModels().User;
	let Grids = database.getModels().Grid;
	console.log("updating database: {user: " + req.params.user_id + ", week: " + req.params.week + "}");

	Users.findOne({email: req.params.user_id}).then((user) => {
		console.log("Found user");
		return Grids.findOne({user: req.params.user_id, week: req.params.week});
	}).then((grid) => {
		console.log("Found grid");
		grid = {...req.body};
		grid = new (database.getModels()).Grid(grid);
		return grid.save();
	}).then(() => {
		console.log("update successfull");
		res.sendStatus(200);
	}).catch((error) => {
		console.log(error);
		res.sendStatus(500);
	});
});

module.exports = router;