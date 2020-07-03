function xor(cond1, cond2) {
	// if cond1 is true and cond2 is false return true
	if(cond1 && !cond2){
		return true
	}
	// if cond1 is false and cond2 is true return true
	if(!cond1 && cond2 ){
		return true
	} else {
		return false
	}
}

console.log(xor(2 === 1, 2 === 2))
