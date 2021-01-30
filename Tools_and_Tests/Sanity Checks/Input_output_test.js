const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question('Type something: ', (answer) => {
	console.log(`good job! You typed: ${answer}`);
	r1.close();
});