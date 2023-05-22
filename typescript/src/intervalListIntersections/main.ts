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

		this.pointer = Math.min(this.int1.head(), this.int2.head())
	}
}

export default IntervalIntersecter