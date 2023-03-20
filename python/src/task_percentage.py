from fractions import Fraction
common_divisors = [9, 7, 5, 3, 2]
absolute_total = 100

def to_seconds(hour_format: str):
	hour, minutes, seconds = hour_format.split(":")

	min_to_sec = int(minutes) * 60
	hr_to_sec = int(hour) * 60 * 60

	total_seconds = int(seconds) + min_to_sec + hr_to_sec
	return total_seconds

def min_common_divisor(num1: int, num2: int):
	for divisor in common_divisors:
		if num1 % divisor == 0 and num2 % divisor == 0:
			return divisor

def task_percentage(partial: str, total: str):
	partial = to_seconds(partial)
	total = to_seconds(total)

	partial_percentage = (partial * absolute_total) / total
	rounded_percentage = round(absolute_total / partial_percentage, 1)

	if (rounded_percentage % 1 != 0):
		current_total = min_common_divisor(partial_percentage, absolute_total)
		current_partial = (partial_percentage * current_total) / absolute_total
		return f"{round(current_partial)}/{current_total}"
	else:
		return f"1/{round(rounded_percentage)}"


if __name__ == "__main__":
	print(
		task_percentage('01:00:00', '03:00:00')
	) # '1/3'
	print(
		task_percentage('02:00:00', '04:00:00')
	) # '1/2'
	print(
		task_percentage('01:00:00', '01:00:00')
	) # '1/1'
	print(
		task_percentage('00:10:00', '01:00:00')
	) # '1/6'
	print(
		task_percentage('01:10:10', '03:30:30')
	) # '1/3'
	print(
		task_percentage('03:30:30', '05:50:50')
	) # '3/5