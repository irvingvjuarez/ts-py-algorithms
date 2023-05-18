from typing import List
from math import pow

def squareAndResort(nums: List[int]):
	head = 0
	tail = len(nums) - 1

	nums[head] = int(pow(nums[head], 2))
	nums[tail] = int(pow(nums[tail], 2))

	while head <= tail:
		if nums[tail] > nums[head]:
			tail -= 1
			nums[tail] = int(pow(nums[tail], 2))
		elif nums[tail] < nums[head]:
			temp = nums[head]

			nums[head] = nums[tail]
			nums[tail] = temp

			tail -= 1
			nums[tail] = int(pow(nums[tail], 2))
		else:
			nums.insert(tail, nums.pop(head))
			tail -= 1

	return nums