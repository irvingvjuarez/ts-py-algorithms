const commonDivisors = [9, 7, 5, 3, 2]
const absoluteTotal = 100

function toSeconds(hourFormat: string) {
	const times = hourFormat.split(":").map(time => Number(time))
	const hour = times[0]
	const minutes = times[1]
	const seconds = times[2]

	const minToSec = minutes * 60
	const hrToSec = hour * 60 * 60

	const totalSeconds = seconds + minToSec + hrToSec
	return totalSeconds
}

function minCommonDivisor(num1: number, num2: number) {
	for (let divisor of commonDivisors) {
		if (num1 % divisor == 0 && num2 % divisor == 0) {
			return divisor
		}
	}

	return 0
}

function taskPercentage(partial: string | number, total: string | number) {
	partial = toSeconds(partial as string)
	total = toSeconds(total as string)

	const partialPercentage = (partial * absoluteTotal) / total
	const roundedPercentage = Number(Math.round((absoluteTotal / partialPercentage) * 10) / 10)

	if (roundedPercentage % 1 != 0) {
		const currentTotal = minCommonDivisor(partialPercentage, absoluteTotal)
		const currentPartial = (partialPercentage * currentTotal) / absoluteTotal
		return `${Math.round(currentPartial)}/${currentTotal}`
	} else {
		return `1/${Math.round(roundedPercentage)}`
	}
}

console.log(
	taskPercentage('01:00:00', '03:00:00') // '1/3'
)
console.log(
	taskPercentage('02:00:00', '04:00:00') // '1/2'
)
console.log(
	taskPercentage('01:00:00', '01:00:00') // '1/1'
)
console.log(
	taskPercentage('00:10:00', '01:00:00') // '1/6'
)
console.log(
	taskPercentage('01:10:10', '03:30:30') // '1/3'
)
console.log(
	taskPercentage('03:30:30', '05:50:50') // '3/5
)