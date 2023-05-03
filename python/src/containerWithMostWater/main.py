from functools import reduce

class Container:

	def __init__(self, heights):
		self._heights = heights
		self._distances = None

	def highest(self):
		return reduce(lambda a, b: a if a > b else b, self._heights)

	def get_distances(self):
		if (not self._distances):
			distances = [{"index": index, "height": value} for index, value in enumerate(self._heights)]
			self._distances = distances

		return self._distances

	def get_index(self, height):
		distances = self.get_distances()
		filteredDistances = list(
			filter(lambda x: x["height"] == height, distances)
		)

		firstMatch = filteredDistances[0]
		return firstMatch["index"]

	def max_width(self, index):
		# Get all the heights that are <= to current_height - the param
		distances = self.get_distances()
		current_item = distances[index]

		distances = [value for value_index, value in enumerate(distances) if value_index != index]

		possible_matchs = list(
			filter(lambda x: x["height"] <= current_item["height"], distances)
		)

		# Get the widths in terms of the index
		widths = [abs(current_item["index"] - x["index"]) for x in distances]

		# Get the max width
		max_width = reduce(lambda a, b: a if a > b else b, widths)

		return max_width

	def greatest_area(self):
		areas = []

		# Get max width of each index
		distances = self.get_distances()
		for index, item in enumerate(distances):
			max_width = self.max_width(index)

			# Multiply max_width*current_height
			# Save that value in a list
			areas.append(max_width * item["height"])

		print(areas)
		# Get the highest value
		greatest_area = reduce(lambda a, b: a if a > b else b, areas)
		return greatest_area