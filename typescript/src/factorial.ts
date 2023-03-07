function getFactorial(num: number): number {
	if (num <= 1) return num

	return num * getFactorial(num - 1)
}

console.log(
	getFactorial(5) // 120
)

console.log(
	getFactorial(6) // 720
)

console.log(
	getFactorial(7) // 5040
)