type IntervalList = Array<number[]>
type Interval = {
	index: number,
	value(): number[],
	head(): number,
	tail(): number
}

class IntervalIntersecter {
	firstList: IntervalList
	secondList: IntervalList
	limit: number
	int1: Interval
	int2: Interval
	pointer: number

	constructor(firstList: IntervalList, secondList: IntervalList) {
		this.firstList = firstList
		this.secondList = secondList

		this.limit = Math.max(
			firstList[firstList.length - 1][1],
			secondList[secondList.length - 1][1]
		)

		this.setupIntervals(firstList, secondList)

		this.pointer = Math.min(this.int1.head(), this.int2.head())
	}

	public solve() {
		const intersections: IntervalList = []
		let currentOverlap: number[] = []
		let currentOverlapFirstIndex = true

		while (this.limit > this.pointer) {
			let overlap = this.isOverlapping()

			if (overlap) {
				if (currentOverlapFirstIndex) {
					currentOverlapFirstIndex = false
					currentOverlap.push(this.pointer, this.pointer)
				} else {
					currentOverlap[1] = this.pointer
				}
			} else {
				if (currentOverlap.length) {
					intersections.push(currentOverlap)
				}

				currentOverlap = []
				currentOverlapFirstIndex = true
			}

			this.movePointerForward()
		}

		return intersections
	}

	private showIntervalIndexes() {
		console.log("Int1 index:", this.int1.index)
		console.log("Int2 index:", this.int2.index)
	}

	protected movePointerForward() {
		this.pointer++

		if (this.pointer > this.int1.tail()) {
			this.updateInterval(1)
		}

		if (this.pointer > this.int2.tail()) {
			this.updateInterval(2)
		}

		// Debugging
		console.log("Pointer:", this.pointer)
		this.showIntervalIndexes()
	}

	protected updateInterval(intervalId: number) {
		if (intervalId === 1) {
			this.int1.index++
		} else {
			this.int2.index++
		}
	}

	protected isOverlapping() {
		return this.pointer <= this.int1.tail() && this.pointer >= this.int2.head()
	}

	protected setupIntervals(firstList: IntervalList, secondList: IntervalList) {
		this.int1 = {
			index: 0,
			value: function() {
				return firstList[this.index]
			},
			head: function() {
				return this.value()[0]
			},
			tail: function() {
				return this.value()[1]
			}
		}

		this.int2 = {
			index: 0,
			value: function() {
				return secondList[this.index]
			},
			head: function() {
				return this.value()[0]
			},
			tail: function() {
				return this.value()[1]
			}
		}
	}
}

export default IntervalIntersecter