/**server.js
 * Created by Robin Brossard
 * Version 1.1
 * Date Created: 31 Jan 2021
 * Simple webserver that serves index.html as well as a linked stylesheet
 */

//requires
const http = require('http');
const fs = require('fs');

//host and port will need to be changed for deployment
const hostname = '127.0.0.1';
const port = 3000;

//promise wrapper for the readFile function
const readFile = (fileName, encoding) => {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, encoding, (err, data) => {
			if (err) {
				return reject(err);
			} else {
				resolve(data);
			}
		})
	});
}

//create the server and listen for requests
const server = http.createServer((req, res) => {

	switch(req.url) {
		case '/quantivity_style.css':
			readFile(__dirname + '/quantivity_style.css').then(contents => {
				res.setHeader('Content-Type', 'text/css');
				res.writeHead(200);
				res.end(contents);
			}).catch(err => {
				console.log(`Unable to read /quantivity_style.css: ${err}`);
				res.writeHead(500);
				res.end(err);
				return;
			})
			break;
		default:
			readFile(__dirname + '/index.html').then(contents => {
				res.setHeader('Content-Type', 'text/html');
				res.writeHead(200);
				res.end(contents);
			}).catch(err => {
				console.log(`Unable to read /index.html: ${err}`);
				res.writeHead(500);
				res.end(err);
				return;
			});
	}
	
	
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});