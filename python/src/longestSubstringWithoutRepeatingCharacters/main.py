def get_longest_substring(s: str):
	size = len(s)
	if (size == 0):
		raise ValueError()

	p1 = 0
	p2 = 1
	max_substring_len = 1

	while p2 < size:
		if s[p2] in s[p1:p2]:
			max_substring_len = max(max_substring_len, len(s[p1:p2]))
			p1 = p2

		p2 += 1

	return max_substring_len