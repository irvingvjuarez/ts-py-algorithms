from typing import List

Numbers = List[int]

def insertion_sort(numbers: Numbers):
	sorted_numbers: Numbers = []

	for index, current_number in enumerate(numbers):
		is_first_iteration = index == 0

		if is_first_iteration:
			sorted_numbers.append(current_number)
			continue

		if len(sorted_numbers) == 1:
			if sorted_numbers[0] < current_number:
				sorted_numbers.append(current_number)
			else:
				sorted_numbers.insert(0, current_number)
		else:
			for sub_index, current_sorted_number in enumerate(sorted_numbers):
				if current_number <= current_sorted_number:
					sorted_numbers.insert(sub_index, current_number)
					break

	return sorted_numbers

if __name__ == "__main__":
	print(
		insertion_sort([78,36,46,43,31,0,3])
	)
