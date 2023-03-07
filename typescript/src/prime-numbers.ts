function isPrimeNumber(num: number) {
	if (num <= 1) return false

	const firstHalf = Math.round(num / 2)
	const secondHalf = num - firstHalf

	let currentFirst = firstHalf <= 1 ? num + 1 : 0
	let currentSecond = secondHalf <= 1 ? num + 1 : 0
	let index = 2

	while(currentFirst < num || currentSecond < num) {
		if (currentFirst < num) {
			// Update currentFirst
			currentFirst = firstHalf * index
		}

		if (currentSecond < num) {
			// Update second
			currentSecond = secondHalf * index
		}

		index += 1
	}

	return (currentFirst === num || currentSecond === num) ? false : true
}

console.log(
	isPrimeNumber(97) // true
)
// console.log(
// 	isPrimeNumber(1) // false
// )

// console.log(
// 	isPrimeNumber(2) // true
// )

// console.log(
// 	isPrimeNumber(3) // true
// )

// console.log(
// 	isPrimeNumber(4) // false
// )

// console.log(
// 	isPrimeNumber(5) // true
// )