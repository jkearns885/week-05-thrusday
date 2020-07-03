function dropRight(arr, n) {
	// if n is larger than array length return []
	if (n >= arr.length)
		return []

// Use n to count in from the end to get the index
let rest = (arr.length - n);
	
	// return a slice of the array using the index as the end
	return arr.slice(0, rest)

}

const shoppingList = ['milk', 'eggs', 'bread']

// run a dropRight function for when I pick up the bread, to drop it off my list...
const revisedShoppingList = dropRight(shoppingList, 1)

console.log(({revisedShoppingList}))
