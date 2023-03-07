from typing import List

def bubble_sort(numbers: List[int]):
	size = len(numbers) - 1

	while size > 1:
		for index, item in enumerate(numbers):
			if index < len(numbers) - 1:
				current = numbers[index]
				next = numbers[index + 1]

				if next < current:
					numbers[index] = next
					numbers[index + 1] = current

		size -= 1

	return numbers

if __name__ == "__main__":
	numbers = [7,13,73,6,68,71,23,4,37,4,36]
	print(
		bubble_sort(numbers)
	)