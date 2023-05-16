import unittest
from main import reverse_string;

class TestReverseString(unittest.TestCase):
	def test_correctness(self):
		result = reverse_string(list("hello"))
		self.assertListEqual(result, ["o", "l", "l", "e", "h"])

		result = reverse_string(list("Canada"))
		self.assertListEqual(result, ["a", "d", "a", "n", "a", "C"])

if __name__ == "__main__":
	unittest.main()