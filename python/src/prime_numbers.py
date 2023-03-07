def is_prime_number(num: int):
	if num <= 1:
		return False

	first_half = num // 2
	second_half = num - first_half

	current_first = num + 1 if first_half <= 1 else 0
	current_second = num + 1 if second_half <= 1 else 0

	index = 2

	while current_first < num or current_second < num:
		if current_first < num:
			current_first = first_half * index

		if current_second < num:
			current_second = second_half * index

		index += 1

	return False if current_first == num or current_second == num else True

if __name__ == "__main__":
	print(
		is_prime_number(97) # true
	)

	print(
		is_prime_number(1) # false
	)

	print(
		is_prime_number(2) # true
	)

	print(
		is_prime_number(3) # true
	)

	print(
		is_prime_number(4) # false
	)

	print(
		is_prime_number(5) # true
	)