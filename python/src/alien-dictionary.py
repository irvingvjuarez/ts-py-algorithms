import unittest
from typing import List

def alien_dictionary(words: List[str], order: str) -> bool:
	words_length = len(words)

	less_than_minimum = words_length < 1
	more_than_maximum = words_length > 100
	diff_order_length = len(order) != 26
	some_uppercase_in_order = not order.islower()
	some_uppercase_in_words = not "".join(words).islower()

	possible_exception_causes = [
		less_than_minimum,
		more_than_maximum,
		diff_order_length,
		some_uppercase_in_order,
		some_uppercase_in_words
	]

	if any(possible_exception_causes):
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

	# expecting all chars in order to be lowercase
	def test_order_lowercase(self):
		words = ["ksi", "hds", "kshjd"]
		order = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" # all uppercase
		self.assertRaises(Exception, alien_dictionary, words, order)

		order = "abcdefghijklmnopqrstuvwxyZ" # one uppercase
		self.assertRaises(Exception, alien_dictionary, words, order)

	# expecting all chars in words to be lowercase
	def test_words_lowercase(self):
		order = "abcdefghijklmnopqrstuvwxyz"
		words = ["UAYE", "IUYT", "KSJ"] # all uppercase
		self.assertRaises(Exception, alien_dictionary, words, order)

		words = ["oius", "iu", "jsJ"] # one char uppercase
		self.assertRaises(Exception, alien_dictionary, words, order)


if __name__ == "__main__":
	unittest.main()