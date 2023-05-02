import unittest

class ContainerWithMostWaterTests(unittest.TestCase):
	def test_highest_available_height(self):
		# Get highest possible height
		container = Container([1, 8, 6, 2, 5, 4, 8, 3, 7])
		self.assertEqual(container.highest(), 8)

	def test_highest_height_max_width(self):
		container = Container([1, 8, 6, 2, 5, 4, 8, 3, 7])
		highest_height = container.highest()
		self.assertEqual(highest_height, 8)

		self.assertEqual(container.max_width(highest_height), 7)

	def test_greatest_possible_area(self):
		container = Container([1, 8, 6, 2, 5, 4, 8, 3, 7])
		self.assertEqual(container.greatest_area(), 49)

if __name__ == "__main__":
	unittest.main()