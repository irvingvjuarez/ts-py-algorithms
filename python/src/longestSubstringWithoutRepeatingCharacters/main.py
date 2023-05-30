def get_longest_substring(s: str):
	size = len(s)
	if (size == 0):
		raise ValueError()

	p1 = 0
	p2 = 1
	longest_length = 1

	while p2 < size:
		substring = s[p1:p2]
		p2_value = s[p2]

		if p2_value in substring:
			longest_length = max(longest_length, len(substring))
			repeated_char_index = substring.index(p2_value) + 1
			p1 += repeated_char_index

		p2 += 1

	return longest_length
