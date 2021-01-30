//A little toy program that can take a simple 2 operand expression (with spaces) and calculate the result

const readline = require('readline');
const _ = require('lodash');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function parse_line(string) {
	let parseArray = string.split(' ');
	let number1 = Number(parseArray[0]);
	let number2 = Number(parseArray[2]);
	if (parseArray[1] === '+') {
		return number1 + number2;
	} else if (parseArray[1] === '-') {
		return number1 - number2;
	} else if (parseArray[1] === '*') {
		return number1 * number2;
	} else if (parseArray[1] === '/') {
		return number1 / number2;
	} else {
		throw parseArray[1] + ' is not a valid operator';
	}
}

r1.on('line', (line) => {
	if (line === 'exit') {
		r1.close();
	} else {
		try {
			console.log('result: ' + parse_line(line));
		} catch (err) {
			console.log(err);
		}
	}
});