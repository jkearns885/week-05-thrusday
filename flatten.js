function flatten(arr) {
	// Create a new array
	let newList = []

// Loop through every item in the array
	for (let i = 0; i < arr.length; i++){
// If the item is an array, add its items to the new array
		if (Array.isArray(arr[i])){
				newList = newList.concat(arr[i])

// If not add the item itself to the new array				
		} else {
			newList.push(arr[i])
		}
	}

// return the new array
	return newList
	 
}

console.log(flatten([8, [3,6,4], 5, 7]))
