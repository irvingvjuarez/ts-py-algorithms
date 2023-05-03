import unittest
from main import Container

class ContainerWithMostWaterTests(unittest.TestCase):
	def test_highest_available_height(self):
		# Get highest possible height
		container = Container([1, 8, 6, 2, 5, 4, 8, 3, 7])
		self.assertEqual(container.highest(), 8)

	def test_height_index_hashmap(self):
		container = Container([1, 8, 6, 2, 5, 4, 8, 3, 7])
		self.assertListEqual(container.get_distances(), [
			{"index": 0, "height": 1},
			{"index": 1, "height": 8},
			{"index": 2, "height": 6},
			{"index": 3, "height": 2},
			{"index": 4, "height": 5},
			{"index": 5, "height": 4},
			{"index": 6, "height": 8},
			{"index": 7, "height": 3},
			{"index": 8, "height": 7},
		])

	def test_highest_height_max_width(self):
		container = Container([1, 8, 6, 2, 5, 4, 8, 3, 7])

		highest_height = container.highest()
		self.assertEqual(highest_height, 8)

		highest_height_index = container.get_index(highest_height)
		self.assertEqual(highest_height_index, 1)

		self.assertEqual(container.max_width(highest_height_index), 7)

	def test_greatest_possible_area(self):
		container = Container([1, 8, 6, 2, 5, 4, 8, 3, 7])
		self.assertEqual(container.greatest_area(), 49)

if __name__ == "__main__":
	unittest.main()