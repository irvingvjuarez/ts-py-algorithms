function mergeSort(numbers: Array<number>): Array<number> {
	if (numbers.length <= 1) return numbers
	const half = Math.round(numbers.length / 2)
	const head = numbers.splice(0, half)
	const tail = numbers

	const sortedNumbers: typeof numbers = []

	const sortedHead = mergeSort(head)
	const sortedTail = mergeSort(tail)

	while (sortedHead.length || sortedTail.length) {
		const headInfo = { size: sortedHead.length, first: sortedHead[0] }
		const tailInfo = { size: sortedTail.length, first: sortedTail[0] }
		let newNumber: number = 0

		if (!tailInfo.size && headInfo.size || headInfo.first < tailInfo.first) {
			newNumber = sortedHead.shift() as number
		} else {
			newNumber = sortedTail.shift() as number
		}

		sortedNumbers.push(newNumber)
	}

	return sortedNumbers
}

console.log(
	mergeSort([70, 50, 30, 10, 20, 40, 60])
)