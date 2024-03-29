function searchIn2dArray(nums: Array<number[]>, target: number) {
	let p1 = 0
	let p2 = nums[0].length - 1
	let row = 0
	let middle

	while(p1 < p2 || row < nums.length) {
		if (p2 === p1 + 1) {
			if (nums[row][p1] === target || nums[row][p2] === target)
				return true
			else return false
		}

		if (target >= nums[row][p1] && target <= nums[row][p2]){
			// Binary search in this row
			middle = Math.round((p1 + p2) / 2)
			if (target === nums[row][middle]) return true

			if (nums[row][middle] > target) {
				p2 = middle
			} else {
				p1 = middle
			}
		} else {
			row++
		}
	}

	return false
}

export default searchIn2dArray