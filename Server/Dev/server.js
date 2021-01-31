



const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

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


const server = http.createServer((req, res) => {
	
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
		/*
	fs.readFile(__dirname + '/index.html', (contents, err) => {
		if (err) {
			console.log(`Unable to read /index.html: ${err}`);
			res.writeHead(500);
			res.end(err);
			return;
		} else {
			res.setHeader('Content-Type', 'text/html');
			res.writeHead(200);
			res.end(contents);
		}
	})
	*/
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});