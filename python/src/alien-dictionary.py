import unittest
from typing import List

# POINTER SETTLED TO DEFAULT VALUES
master_pointer = { "word": 0, "char": 0 }
slave_pointer = { "word": 1, "char": 0 }

# VALIDATIONS DECLARED
master_char_gt = False
master_word_gt = False

slave_char_gt = False
slave_word_gt = False


# Initializing result variable to True as default
result = True


# FUNCTION TO CREATE/UPDATE VALIDATIONS
def set_validations(words: List[str]):
	global master_word_gt
	global slave_word_gt
	global master_char_gt
	global slave_char_gt

	# Checking that the word index is not greater than the word list length
	master_word_gt = master_pointer["word"] + 1 > len(words)
	slave_word_gt = slave_pointer["word"] + 1 > len(words)

	# Checking if the current character is not greater than the word length
	# Expected behavior to be False
	master_char_gt = True if master_word_gt else master_pointer["char"] + 1 > len(words[master_pointer["word"]])
	slave_char_gt = True if slave_word_gt else slave_pointer["char"] + 1 > len(words[slave_pointer["word"]])


# FUNCTION TO SET RESULT TO FALSE
def turning_to_false():
	global result
	global master_word_gt
	global slave_word_gt

	# Setting result value to False
	result = False

	# Breaking while loop
	master_word_gt = True
	slave_word_gt = True


# MAIN FUNCTION
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

	# VALIDATIONS CREATED AND REASSIGNED TO BE USED IN NESTED SCOPES
	set_validations(words)
	global master_word_gt
	global slave_word_gt
	global master_char_gt
	global slave_char_gt

	# WHILE LOOP TO KEEP RUNNING THE PROGRAM
	while (not master_word_gt) or (not slave_word_gt):
		# CONDITIONALS

		# Checking if char overpassed the limit
		if master_char_gt or slave_char_gt:
			# Validate words lengths
			master_length = len(words[master_pointer["word"]])
			slave_length = len(words[slave_pointer["word"]])

			if master_length > slave_length:
				# Increasing word prop by one
				master_pointer["word"] += 1
				slave_pointer["word"] += 1

				# Resetting char value to 0
				master_pointer["char"] = 0
				slave_pointer["char"] = 0

				# Validations are updated
				set_validations(words)

			else:
				turning_to_false()

		else:
			# VALIDATIONS OF THE ACTUAL ALGORITHM

			# getting value of current chars in terms of the given order
			master_current_char = words[master_pointer["word"]][master_pointer["char"]]
			master_char_val = order.index(master_current_char)

			slave_current_char = words[slave_pointer["word"]][slave_pointer["char"]]
			slave_char_val = order.index(slave_current_char)

			# Expecting the master value to be less than the slave one
			if master_char_val <= slave_char_val:

				# Char props increase by one
				master_pointer["char"] += 1
				slave_pointer["char"] += 1

				# Validations are updated
				set_validations(words)

			else:
				turning_to_false()

	global result

	return result



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

	def test_return_false(self):
		result = alien_dictionary(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")
		self.assertFalse(result)

		result = alien_dictionary(["word","world","row"], "worldabcefghijkmnpqstuvxyz")
		self.assertFalse(result)

		result = alien_dictionary(["app","apple"], "abcdefghijklmnopqrstuvwxyz")
		self.assertFalse(result)


if __name__ == "__main__":
	unittest.main()