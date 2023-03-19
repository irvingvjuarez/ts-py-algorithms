from typing import List
from functools import reduce

def iterate_thru_cities(value: int, max_level: int, elements: List[int], limit: int, count: int):
	if value == limit:
		return value

	if value > limit:
		return 0

	if count >= max_level:
		return value

	values: List[int] = []

	for index, current_value in enumerate(elements):
		new_elements = elements.copy()
		new_elements.pop(index)

		values.append(
			iterate_thru_cities(value + current_value, max_level, new_elements, limit, count + 1)
		)

	return reduce(lambda a, b: a if a > b else b, values)


def get_max_gifts(gifts_cities: List[int], max_gifts: int, max_cities: int):
	current_sums: List[int] = []

	for index, current_city in enumerate(gifts_cities):
		gifts_cities_copy = gifts_cities.copy()
		gifts_cities_copy.pop(index)

		current_sums.append(
			iterate_thru_cities(current_city, max_cities, gifts_cities_copy, max_gifts, 1)
		)

	best_fit = reduce(lambda a, b: a if a > b else b, current_sums)
	return 0 if best_fit > max_gifts else best_fit

if __name__ == "__main__":
	print(get_max_gifts([12, 3, 11, 5, 7], 20, 3)) # 20
	print(get_max_gifts([50, 70, 30], 100, 2)) # 100
	print(get_max_gifts([50, 70, 30], 100, 3)) # 100

	print(get_max_gifts([50], 15, 1)) # 0
	print(get_max_gifts([50], 100, 1)) # 50
	print(get_max_gifts([50, 70], 100, 1)) # 70
	print(get_max_gifts([50, 70, 30], 100, 4)) # 100