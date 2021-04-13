const url = "mongodb://localhost:27017/quantivitydb";
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs/promises');

var state ={
	db: null
}

exports.connect = () => {
	return new Promise((resolve, reject) => {
		MongoClient.connect(url).then((database) => {
			state.db = database;
			//resolve(database);
			return state.db.db('quantivitydb').collection('test_collection').deleteMany({});
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

exports.get = () => {
	return state.db;
}

exports.close = () => {
	if (state.db) {
		return new Promise((resolve, reject) => {
			state.db.close().then(() => {
				state.db = null;
				resolve();
			}).catch((error) => {
				reject(error);
			})
		});
	}
}