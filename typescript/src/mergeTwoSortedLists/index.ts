class Merger {
	protected _nums1: number[]
	protected _size1: number
	protected _nums2: number[]
	protected _size2: number

	constructor(
		nums1: Merger["_nums1"],
		size1: Merger["_size1"],
		nums2: Merger["_nums2"],
		size2: Merger["_size2"]
	) {
		this._nums1 = nums1
		this._size1 = size1

		this._nums2 = nums2
		this._size2 = size2
	}

	protected removeZerosInNums() {
		this._nums1 = this._nums1.filter(value => value != 0)
		this._nums2 = this._nums2.filter(value => value != 0)
	}

	public sort() {
		this.removeZerosInNums()
		const mergedArr = []

		while (mergedArr.length < (this._size1 + this._size2)) {
			let minor: number[]

			if (!this._nums1[0]) {
				minor = [...this._nums2]
			} else if (!this._nums2[0]) {
				minor = [...this._nums1]
			} else {

				if (this._nums1[0] < this._nums2[0]) {
					minor = this._nums1.splice(0, 1)
				} else {
					minor = this._nums2.splice(0, 1)
				}
			}


			mergedArr.push(...minor)
		}

		return mergedArr
	}

	get nums1() {
		return this._nums1
	}

	get size1() {
		return this._size1
	}

	get nums2() {
		return this._nums2
	}

	get size2() {
		return this._size2
	}
}

export default Merger