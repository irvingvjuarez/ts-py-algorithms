function selectionSort(numbers: Array<number>) {
	for (let i in numbers) {
		const index = Number(i)
		const comparisonNumbers = numbers.slice(index + 1)
		const currentNumber = numbers[index]

		const indexValue = index
		const minimumNumber = { value: currentNumber, indexValue}

		for (let j in comparisonNumbers) {
			const subIndex = Number(j) + indexValue + 1
			const current = comparisonNumbers[Number(j)]

			if (current < minimumNumber.value) {
				minimumNumber.value = current
				minimumNumber.indexValue = subIndex
			}
		}

		if (currentNumber != minimumNumber.value) {
			const greater = currentNumber
			numbers[minimumNumber.indexValue] = greater
			numbers[index] = minimumNumber.value
		}
	}

	return numbers
}

console.log(
	selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36])
)