import sys
sys.setrecursionlimit(10000)

def fib(index: int, obj: dict = {}):
	assert type(index) == int, f"{index} must be an integer"

	if index <= 2:
		return 1
	elif index in obj:
		return obj[index]

	obj[index] = fib(index - 1, obj) + fib(index - 2, obj)
	return obj[index]

if __name__ == "__main__":
	print(
		fib(1200)
	)

	print(
		fib(13) # 233
	)