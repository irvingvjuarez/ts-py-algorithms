import unittest
from main import squareAndResort

class TestSquareAndResort(unittest.TestCase):
	def test_correctness(self):
		result = squareAndResort([-4,-1,0,3,10])
		self.assertListEqual(result, [0,1,9,16,100])

		result = squareAndResort([-7,-3,2,3,11])
		self.assertListEqual(result, [4,9,9,49,121])

		result = squareAndResort([-7,-3,2,5,7])
		self.assertListEqual(result, [4,9,25,49,49])


if __name__ == "__main__":
	unittest.main()