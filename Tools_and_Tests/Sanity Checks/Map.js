

let my_array = [1, 2, 3, 4, 5];

let new_array = [];


new_array = my_array.map((array_element, index) => {
	if ((index + 1) == full_array.length) {
		return array_element + full_array[0];
	} else {
		return array_element + my_array[index + 1];
	}
});

console.log(my_array);
console.log(new_array);

