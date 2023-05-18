from typing import List
from math import pow

def decrease(nums, head, tail):
	tail -= 1

	if not tail <= head:
		nums[tail] = int(pow(nums[tail], 2))

	return nums, tail

def squareAndResort(nums: List[int]):
	head = 0
	tail = len(nums) - 1

	nums[head] = int(pow(nums[head], 2))
	nums[tail] = int(pow(nums[tail], 2))

	while head < tail:
		if nums[tail] > nums[head]:
			# Decrease
			nums, tail = decrease(nums, head, tail)
		elif nums[tail] < nums[head]:
			# SWAP
			temp = nums[head]
			nums[head] = nums[tail]
			nums[tail] = temp

			# Decrease
			nums, tail = decrease(nums, head, tail)
		else:
			# Inserting the head to the tail index
			nums.insert(tail, nums.pop(head))
			tail -= 1

			nums[head] = int(pow(nums[head], 2))

	return nums