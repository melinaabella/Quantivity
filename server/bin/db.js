const url = "mongodb://localhost:27017/quantivitydb";
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs/promises');
const mongoose = require('mongoose');

//database connection
var state = {
	db: null
};

//schemas
var schemas = {
	userSchema: null,
	gridSchema: null
};

var models = {
	User: null,
	Grid: null
};

exports.connect = () => {
	return new Promise((resolve, reject) => {
		mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
			state.db = mongoose.connection;
			defineSchemas();
			compileModels();
			resolve(state.db);
		}).catch((error) => {
			reject(error);
		});

	});

	return new Promise((resolve, reject) => {
		MongoClient.connect(url).then((database) => {
			state.db = database;
			resolve(database);
			//return state.db.db('quantivitydb').collection('test_collection').deleteMany({});
		}).then(() => {
			return fs.readFile(__dirname + '/../userData.json');
		}).then((contents) => {
			let obj = (JSON.parse(contents));
			let database_object = state.db.db('quantivitydb');
			return database_object.collection('test_collection').insertOne(obj);
		}).then((result) => {
			console.log("Database insertion successfull");
			console.log(result);
			resolve(state.db);
		}).catch((error) => {
			reject(error);
		});
	});
}

exports.getdb = () => {
	return state.db;
}

exports.closedb = () => {
	if (state.db) {
		return new Promise((resolve, reject) => {
			state.db.close().then(() => {
				state.db = null;
				resolve();
			}).catch((error) => {
				reject(error);
			});
		});
	}
}

exports.getModels = () => {
	return models;
}

function defineSchemas() {
	schemas.userSchema =  mongoose.Schema({
		id: Number,
		name: String,
		email: String,
		password: String
	});
	schemas.gridSchema = mongoose.Schema({
		user: String,
		week: String,
		categories: Array
	})
}

function compileModels() {
	models.User = mongoose.model('User', schemas.userSchema);
	models.Grid = mongoose.model('Grid', schemas.gridSchema);
}