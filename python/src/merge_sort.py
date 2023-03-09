from typing import List

def merge_sort(numbers: List[int]):
	if len(numbers) <= 1:
		return numbers

	half = len(numbers) // 2
	head, tail = numbers[:half], numbers[half:]

	sorted_numbers = []
	sorted_head = merge_sort(head)
	sorted_tail = merge_sort(tail)

	head_info = {}
	tail_info = {}

	while len(sorted_head) or len(sorted_tail):
		try:
			head_info["size"], head_info["first"] = len(sorted_head), sorted_head[0]
			tail_info["size"], tail_info["first"] = len(sorted_tail), sorted_tail[0]
		except IndexError:
			if not len(sorted_head):
				head_info["first"] = 0
			else:
				tail_info["first"] = 0

		new_number: int = 0

		empty_tail = not tail_info["size"] and head_info["size"]
		greater_head = head_info["first"] < tail_info["first"]
		if greater_head or empty_tail:
			new_number = sorted_head.pop(0)
		else:
			new_number = sorted_tail.pop(0)

		sorted_numbers.append(new_number)

	return sorted_numbers

if __name__ == "__main__":
	print(
		merge_sort([70, 50, 30, 10, 20, 40, 60])
	)