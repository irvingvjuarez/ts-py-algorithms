def factorial(num: int):
	assert isinstance(num, int), f"{num} must be integer"

	if num <= 1:
		return num

	return num * factorial(num - 1)


if __name__ == "__main__":
	print(
		factorial(5) # 120
	)

	print(
		factorial(6) # 720
	)

	print(
		factorial(7) # 5040
	)