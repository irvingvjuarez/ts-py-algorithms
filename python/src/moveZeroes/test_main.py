import unittest
from main import moveZeroes

class TestMoveZeroes(unittest.TestCase):
  def test_correctness(self):
    result = moveZeroes([0,1,0,3,12])
    self.assertListEqual(result, [1,3,12,0,0])

    result = moveZeroes([0])
    self.assertListEqual(result, [0])

  def test_same_memory_reference(self):
    nums = [4,0,0,1,0,3,12]
    result = moveZeroes(nums)

    self.assertEqual(True, nums is result) # Same memory reference
    self.assertListEqual(result, [4,1,3,12,0,0,0]) # correctness

if __name__ == "__main__":
  unittest.main()