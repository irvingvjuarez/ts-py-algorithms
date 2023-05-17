from typing import List

def sort_colors(nums: List[int]):
	head = 0
	tail = len(nums) - 1

	while head < tail:
		head_stationary = None

		if nums[tail] < nums[head]:
			head_stationary = nums[head]
			nums[head] = nums[tail]
			nums[tail] = head_stationary

			tail -= 1
		elif nums[tail] > nums[head]:
			head += 1
		else:
			tail -= 1

	return nums