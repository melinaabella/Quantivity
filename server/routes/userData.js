const express = require('express');
const router = express.Router();
const path = require('path');
const debug = require('debug')('server:server');
const fs = require('fs/promises');
const database = require('../bin/db');
const userManagement = require('../bin/userManagement');

router.get('/get/:week', (req, res, next) => {
	let Users = database.getModels().User;
	let Grids = database.getModels().Grid;
	Users.findOne({email: userManagement.getUser()}).then((user) => {
		console.log("quering database: {user: " + userManagement.getUser() + ", week: " + req.params.week + "}");
		return Grids.findOne({user: userManagement.getUser(), week: req.params.week});
	}).then((grid) => {
		console.log("database results: " + grid);
		if (grid == null) {
			let new_grid  = new Grids();
			new_grid.user = userManagement.getUser();
			new_grid.week = req.params.week;
			new_grid.save();
			res.json(new_grid);
		} else {
			res.json(grid);
		}
	}).catch((error) => {
		console.log(error);
		res.sendStatus(404);
	});
});

router.post('/set/:id', (req, res, next) => {
	let Users = database.getModels().User;
	let Grids = database.getModels().Grid;
	console.log("recieved request: ");
	console.log(req.body);
	console.log("updating database: {user: " + userManagement.getUser() + ", week: " + req.body.week + "}");

	if (userManagement.getUser() == '') {
		res.sendStatus(205);
	} else {

		Users.findOne({email: userManagement.getUser()}).then((user) => {
			console.log("Found user");
			return Grids.findOneAndUpdate({_id: req.params.id}, {...req.body});
		})/*.then((grid) => {
			console.log("Found grid");
			grid.categories = {...req.body.categories};
			grid = {...req.body};
			grid = new (database.getModels()).Grid(grid);
			console.log("grid before save: " + grid);
			return grid.save();
		})*/.then(() => {
			return Grids.findOne({_id: req.params.id});
		}).then((grid) => {
			console.log("querried grid: ");
			console.log(grid);
			console.log("What was supposed to be updated: ");
			console.log(req.body);
			console.log("update successfull");
			res.sendStatus(200);
		}).catch((error) => {
			console.log(error);
			res.sendStatus(500);
		});
	}
});

module.exports = router;