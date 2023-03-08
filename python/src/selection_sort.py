from typing import List

Numbers = List[int]

def selection_sort(numbers: Numbers):
	for index, number in enumerate(numbers):
		comparison_numbers = numbers[index + 1:]

		minimum_number = {
			"value": number,
			"index": index
		}

		for sub_index, current in enumerate(comparison_numbers):
			sub_index += index + 1
			if current < minimum_number["value"]:
				minimum_number["value"], minimum_number["index"] = current, sub_index

		min_num = minimum_number["value"]
		min_num_index = minimum_number["index"]

		if number != minimum_number["value"]:
			numbers[min_num_index], number[index] = number, min_num

	return numbers

if __name__ == "__main__":
	print(
		selection_sort([29, 72, 98, 13, 87, 66, 52, 51, 36])
	)