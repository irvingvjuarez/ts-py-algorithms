from typing import List

def moveToEnd(nums: List[int], pointer: int):
  nums.append(
    nums.pop(pointer)
	)

  return nums

def moveZeroes(nums: List[int]):
  nums_size = len(nums) - 1

  head = 0
  tail = nums_size - 1

  while head <= tail:
    if nums[tail] == 0:
      nums = moveToEnd(nums, tail)
    else:
      tail -= 1

    if nums[head] == 0:
      nums = moveToEnd(nums, head)
    else:
      head += 1

  return nums