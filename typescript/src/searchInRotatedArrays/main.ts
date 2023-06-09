function fixRotation(nums: number[], target: number, start: number, end: number) {
	const isTargetOnTheLeftSide = target > nums[start]
	const isPointerRightwise = isTargetOnTheLeftSide ? false : true

	function preceedingValue() {
		const nextNumberIndex = isPointerRightwise ? start + 1 : end - 1
		return nums[nextNumberIndex]
	}

	function currentValue() {
		return isPointerRightwise ? start : end
	}

	function movePointer() {
		if (isPointerRightwise) start++
		if (!isPointerRightwise) end--
	}

	while ( preceedingValue() > currentValue() ) {
		movePointer()
	}

	movePointer()
	return { start, end }
}

function getTargetPosition(nums: number[], target: number) {
	let { start, end } = fixRotation(nums, target, 0, nums.length - 1)
	let middle: number

	console.log("Target:", target)
	console.log("Nums scope:", nums.slice(start, end))

	return 0
}

export default getTargetPosition