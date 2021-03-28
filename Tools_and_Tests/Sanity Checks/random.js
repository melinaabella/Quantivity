function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}

for (let i = 0; i < 100; i++) {
	let array = [0, 0, 0, 0, 0];
	for (let j = 0; j < 5; j++) {
		array[j] = getRandomInt(6) + getRandomInt(6) + getRandomInt(6);
	}
	console.log("Set " + i + ": " + array);
}