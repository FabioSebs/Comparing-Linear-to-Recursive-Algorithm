//Prime Number

let composite = 27
let prime = 13


//My Way O(n)
let isPrime = (number) => {
	let start = 2;
	let range = [...Array(number).keys()]
	range = range.slice(start, number)
	let check = true

	range.forEach((i)=>{
		number%i===0 ? check = false : null
	})

	return check
}

//Algorithm #4 O(n/2)
let isPrime2 = (number) => {
	let factor = null

	number > 1 ? factor = 2 : factor = 1

	for (let i=2 ; i<= Math.floor(number/2); i++) {
		number % i == 0 ? factor++ : null
	}

	if (factor === 2) {return true}
	else {return false}
}

//Recursive Manner O(n/2)
let isPrime3 = (number, i=2) => {
	if (Math.floor(number/2) === i){return true}
	if (number%i===0){return false}
	return isPrime3(number, i+1)
}


let testAlgo = (algorithm,label) => {
	return new Promise((res,rej)=>{
		if (algorithm(173) === true) {
			console.time(label)
			res(label)
		}
		else {
			rej("Number wasnt prime")
		}
	})
}
//.148ms O(n)

// testAlgo(isPrime, "My Algorithm")
// 	.then((label)=>{console.timeEnd(label)})
// 	.catch((msg)=>{console.log(msg)})


//.096ms O(n)
// testAlgo(isPrime2, "Algorithm #4")
// 	.then((label)=>{console.timeEnd(label)})
// 	.catch((msg)=>{console.log(msg)})


//.95ms O(logn)
testAlgo(isPrime3, "Recursive Algorithm")
	.then((label)=>{console.timeEnd(label)})
	.catch((msg)=>{console.log(msg)})



