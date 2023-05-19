class ValidatePalindrome {

	static solve(str: string, options: number = 1) {
		let head = 0
		let tail = str.length - 1

		while (head <= tail) {
			const match = str[head] === str[tail]

			if (match) {
				// pointers moving centerwise
				tail--
				head++
			} else {
				if (options) {
					options--
					tail--
				} else {
					return false
				}
			}
		}

		return true
	}
}

export default ValidatePalindrome