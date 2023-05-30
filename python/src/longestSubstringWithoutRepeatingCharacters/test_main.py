import unittest
from main import get_longest_substring

class TestLongestSubstring(unittest.TestCase):
	def test_existence(self):
		self.assertTrue(not get_longest_substring is None)

	def test_failure(self):
		with self.assertRaises(ValueError):
			get_longest_substring("")

	def test_correctness(self):
		result = get_longest_substring("abcabcbb")
		self.assertEqual(result, 3)

		result = get_longest_substring("jdkafnlcdsalkxcmpoiuytfccv")
		self.assertEqual(result, 15)

		result = get_longest_substring("jd")
		self.assertEqual(result, 1)

		result = get_longest_substring("e")
		self.assertEqual(result, 1)

		result = get_longest_substring("abcdaefas")
		self.assertEqual(result, 6)

if __name__ == "__main__":
	unittest.main()