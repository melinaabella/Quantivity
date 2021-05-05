const express = require('express');
const router = express.Router();
const path = require('path');
const debug = require('debug')('server:server');

//downloads
router.get('/:download_id', (req, res, next) => {
	let filePath = '/../public/downloads/';
	switch(req.params.download_id) {
	case 'test_file':
		filePath = filePath + 'test_file.txt';
		break;
	case 'proposal':
		filePath = filePath + 'Quantivity_Project_Proposal_2021.pdf';
		break;
	case 'specification':
		filePath = filePath + 'Quantivity_Project_Specification_2021.pdf';
		break;
	case 'testing':
		filePath = filePath + 'Quantivity_Acceptance_Criteria_and_Testing_2021.pdf';
		break;
	case 'progress':
		filePath = filePath + 'Quantivity_Progress_2021.pdf';
		break;
	case 'implementation':
		filePath = filePath + 'Quantivity_Acceptance_Criteria_and_Testing_2021.pdf';
		break;
	default:
		next(new Error ('Invalid download_id'));
	}
	return res.download(path.join(__dirname, filePath));
	next();
});

module.exports = router;