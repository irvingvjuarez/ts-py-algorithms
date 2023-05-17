import unittest
from main import sort_colors

class TestSortColors(unittest.TestCase):
	def test_correctness(self):
		result = sort_colors([2,0,2,1,1,0])
		self.assertListEqual(result, [0,0,1,1,2,2])

		result = sort_colors([2,0,1])
		self.assertListEqual(result, [0,1,2])

if __name__ == "__main__":
	unittest.main()