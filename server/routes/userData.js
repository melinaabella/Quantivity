const express = require('express');
const router = express.Router();
const path = require('path');
const debug = require('debug')('server:server');
const fs = require('fs/promises');
const database = require('../bin/db');

router.get('/get/:user_id/:week', (req, res, next) => {
	let Users = database.getModels().User;
	let Grids = database.getModels().Grid;
	Users.find({email: req.params.user_id}).then(() => {
		console.log("quering database: {user: " + req.params.user_id + ", week: " + req.params.week + "}");
		Grids.find({user: req.params.user_id, week: req.params.week}).then((results) => {
			console.log("database results: " + results);
			if (results.length > 0) {
				res.json(results[0]);
			} else {
				res.sendStatus(404);
			}
		}).catch((e) => {
			console.log(e);
			res.sendStatus(500);
		})
	}).catch((error) => {
		console.log(error);
		res.sendStatus(404);
	});
});

router.post('/set/:user_id/:week', (req, res, next) => {
	let Users = database.getModels().User;
	let Grids = database.getModels().Grid;
	Grids.findOneAndUpdate({user: req.params.user_id, week: req.params.week}, {...req.body}).then(() => {
		res.sendStatus(200);
	}).catch(() => {
		console.log(error);
		res.sendStatus(404);
	});
	/*Users.find({email: req.params.user_id}).then(() => {
		Grids.find({user: req.params.user_id, week: req.params.week}).then((results) => {
			if (results.length == 0) {
				let new_grid = new Grids({...(req.body)});
				console.log("new grid object: " + new_grid);
				new_grid.save().then(() => {
					res.sendStatus(200);
				}).catch((e) => {
					console.log(e);
					res.sendStatus(500);
				});
			} else {
				for (let i = 1; i < results.length; i++) {
					results[i].delete();
				}
				Grids.updateOne({user: req.params.user_id, week: req.params.week}, {...req.body}, (error, numberAffected) => {
					if (error) {
						console.log(error);
					}

					console.log("documents updated: " + numberAffected);
				});
			}
		})
		
		
		
	}).catch((error) => {
		console.log(error);
		res.sendStatus(404);
	});*/
});

module.exports = router;