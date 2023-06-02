function fixRotation(nums: number[], target: number, start: number, end: number) {
	let pointerDirection

	if (target > nums[start]) { // Moving the end pointer
		pointerDirection = "left"
	} else { // Moving the start pointer
		pointerDirection = "right"
	}

	const preceedingValue = () => {
		let value = pointerDirection === "right"
			? nums[start + 1]
			: nums[end - 1]
		return value
	}

	const currentValue = () => {
		let value = pointerDirection === "right" ? start : end
		return value
	}

	while ( preceedingValue() > currentValue() ) {
		if (pointerDirection === "right") {
			start++
		} else {
			end--
		}
	}

	if (pointerDirection === "right") {
		start++
	} else {
		end--
	}

	return { start, end }
}

function getTargetPosition(nums: number[], target: number) {
	let start = 0
	let end = nums.length - 1
	let middle: number

	const updatedPointers = fixRotation(nums, target, start, end)
	start = updatedPointers.start
	end = updatedPointers.end

	console.log("Target:", target)
	console.log("Start:", start)
	console.log("End:", end)
	console.log("Nums:", nums)

	return 0
}

export default getTargetPosition