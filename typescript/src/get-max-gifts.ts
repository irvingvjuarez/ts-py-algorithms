function iterateThruCities(value: number, maxLevel: number, elements: Array<number>, limit: number, count: number): number {
	if (value === limit) return value
	if (value > limit) return 0
	if (count >= maxLevel) return value

	const values: number[] = []

	for (let index in elements) {
		const newElements = [...elements]
		const currentValue = newElements.splice(Number(index), 1)[0]

		values.push(
			iterateThruCities(value + currentValue, maxLevel, newElements, limit, count + 1)
		)
	}

	return Math.max(...values)
}

function getMaxGifts(giftsCities: Array<number>, maxGifts: number, maxCities: number) {
	const currentSums: number[] = []

	for (let index in giftsCities) {
		const giftsCitiesCopy = [...giftsCities]
		const currentCity = giftsCitiesCopy.splice(Number(index), 1)[0]
		currentSums.push(
			iterateThruCities(currentCity, maxCities, giftsCitiesCopy, maxGifts, 1)
		)
	}

	const bestFit = Math.max(...currentSums)
	return bestFit > maxGifts ? 0 : bestFit
}

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3


console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20
console.log(getMaxGifts([50], 15, 1)) // 0
console.log(getMaxGifts([50], 100, 1)) // 50
console.log(getMaxGifts([50, 70], 100, 1)) // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100
