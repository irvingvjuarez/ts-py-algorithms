vowels = list("aeiouAEIOU")

def reverse_vowels(s: str):
	s = list(s)
	head = 0
	tail = len(s) - 1

	while head < tail:
		if s[head] in vowels and s[tail] in vowels:
			# SWAP
			head_intermediary = s[head]
			s[head] = s[tail]
			s[tail] = head_intermediary

			head += 1
			tail -= 1

		elif s[head] in vowels:
			tail -= 1
		elif s[tail] in vowels:
			head += 1
		else:
			head += 1
			tail -= 1

	return "".join(s)