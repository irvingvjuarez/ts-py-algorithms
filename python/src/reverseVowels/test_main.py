import unittest
from main import reverse_vowels

class TestReverseVowels(unittest.TestCase):
	def test_correctness(self):
		result = reverse_vowels("hola")
		self.assertEqual(result, "halo")

		result = reverse_vowels("leetcode")
		self.assertEqual(result, "leotcede")

if __name__ == "__main__":
	unittest.main()