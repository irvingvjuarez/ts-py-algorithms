type MemoObject = {
	[key: number]: number
}

function fib(index: number, obj: MemoObject = {}): number {
	if (index <= 2) {
		return 1
	} else if (index in obj) {
		return obj[index]
	}

	return obj[index] = fib(index - 1, obj) + fib(index - 2, obj)
}

console.log(
	fib(12) // 144
)

console.log(
	fib(13) // 233
)