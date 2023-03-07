def fib(index: int):
	assert type(index) == int, f"{index} must be an integer"

	if index <= 2:
		return 1

	return fib(index - 1) + fib(index - 2)

if __name__ == "__main__":
	print(
		fib(12) # 144
	)

	print(
		fib(13) # 233
	)