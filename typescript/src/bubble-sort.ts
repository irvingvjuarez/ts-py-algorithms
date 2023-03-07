function bubbleSort(arr: Array<number>) {
	let size = arr.length - 1

	while(size > 1) {
		for (let i in arr) {
			const index = Number(i)

			if (index < arr.length - 1) {
				const current = arr[index]
				const next = arr[index + 1]

				if (next < current) {
					arr[index] = next
					arr[index + 1] = current
				}
			}
		}

		size -= 1
	}

	return arr
}

const myArr = [87,3,28,7,23,3,25,6,328,21]
console.log(bubbleSort(myArr))