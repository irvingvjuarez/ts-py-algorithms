function insertionSort(arr: Array<number>) {
	const sortedArr: typeof arr = []

	for (let i in arr) {
		const index = Number(i)
		const isFirstIteration = index === 0
		const currentNumber = arr[index]

		if (isFirstIteration) {
			sortedArr.push(currentNumber)
			continue
		}

		if (sortedArr.length === 1) {
			if (sortedArr[0] < currentNumber) {
				sortedArr.push(currentNumber)
			} else {
				sortedArr.unshift(currentNumber)
			}
		} else {
			for (let j in sortedArr) {
				const subIndex = Number(j)

				if (currentNumber <= sortedArr[subIndex]) {
					let subArr = sortedArr.splice(subIndex)
					sortedArr.push(currentNumber, ...subArr)
					break
				}
			}
		}
	}

	return sortedArr
}

console.log(
	insertionSort([23, 1, 10, 5, 2])
)