const express = require('express');
const router = express.Router();
const path = require('path');

//Get about page
router.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname + '/../public/html/about.html'));
});

module.exports = router;