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
				minimum_number["value"] = current
				minimum_number["index"] = sub_index

		if number != minimum_number["value"]:
			greater = number
			numbers[minimum_number["index"]] = greater
			numbers[index] = minimum_number["value"]

	return numbers

if __name__ == "__main__":
	print(
		selection_sort([29, 72, 98, 13, 87, 66, 52, 51, 36])
	)