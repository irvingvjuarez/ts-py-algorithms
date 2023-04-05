import unittest
from typing import List

def alien_dictionary(words: List[str], order: str) -> bool:
	words_length = len(words)

	less_than_minimum = words_length < 1
	more_than_maximum = words_length > 100
	diff_order_length = len(order) != 26

	if less_than_minimum or more_than_maximum or diff_order_length:
		raise Exception()

	return False

class AlienDictionaryTestCases(unittest.TestCase):
	def test_being_function(self):
		self.assertIsInstance(alien_dictionary, object)

	def test_words_length(self):
		words = []
		order = "abcdefghijklmnopqrstuvwxyz"
		self.assertRaises(Exception, alien_dictionary, words, order)

		words = [chr(word) for word in range(101)]
		self.assertRaises(Exception, alien_dictionary, words, order)

	def test_order_length(self):
		words = ["a"]
		order = "abcdefghijklmnopqrstuvwxy" # 25
		self.assertRaises(Exception, alien_dictionary, words, order)

		order = "abcdefghijklmnopqrstuvwxyzA" # 27
		self.assertRaises(Exception, alien_dictionary, words, order)

if __name__ == "__main__":
	unittest.main()