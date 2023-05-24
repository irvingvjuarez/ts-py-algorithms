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
		let int1CurrentIndex: number = this.int1.index
		let int2CurrentIndex: number = this.int2.index

		while (this.limit > this.pointer) {
			const overlap = this.isOverlapping()
			const intervalIndexesMatch = int1CurrentIndex === this.int1.index && int2CurrentIndex === this.int2.index

			if (overlap) {

				if (!intervalIndexesMatch) {
					currentOverlapFirstIndex = true
					intersections.push(currentOverlap)
					currentOverlap = []
				}

				if (currentOverlapFirstIndex) {
					int1CurrentIndex = this.int1.index
					int2CurrentIndex = this.int2.index

					currentOverlapFirstIndex = false
					currentOverlap.push(this.pointer, this.pointer)
				} else {
					currentOverlap[1] = this.pointer
				}
			} else {
				int1CurrentIndex = this.int1.index
				int2CurrentIndex = this.int2.index

				if (currentOverlap.length) {
					intersections.push(currentOverlap)
				}

				currentOverlap = []
				currentOverlapFirstIndex = true
			}

			this.movePointerForward()

			if (this.pointer >= this.limit) {
				intersections.push(currentOverlap)
			}
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
	}

	protected updateInterval(intervalId: number) {
		if (intervalId === 1) {
			this.int1.index++
		} else {
			this.int2.index++
		}
	}

	protected isOverlapping() {
		const int1Constraints = this.pointer >= this.int1.head() && this.pointer <= this.int1.tail()
		const int2Constraints = this.pointer >= this.int2.head() && this.pointer <= this.int2.tail()

		return int1Constraints && int2Constraints
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