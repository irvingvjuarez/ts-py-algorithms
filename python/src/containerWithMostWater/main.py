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

		# Updating distances to remove current_item from them
		distances = [value for value_index, value in enumerate(distances) if value_index != index]

		possible_matches = list(
			filter(lambda x: x["height"] <= current_item["height"], distances)
		)

		# Get the widths in terms of the index
		for x in possible_matches:
			x["width"] = abs(current_item["index"] - x["index"])

		# Get the match with the max width
		if (len(possible_matches)):
			match = reduce(lambda a, b: a if a["width"] > b["width"] else b, possible_matches)
		else:
			match = current_item
			match["width"] = 1

		# Assigning the results
		max_width = match["width"]
		end_height = match["height"]

		return max_width, end_height

	def greatest_area(self):
		areas = []

		# Get max width of each index
		distances = self.get_distances()
		for index, item in enumerate(distances):
			max_width, end_height = self.max_width(index)

			# Multiply max_width*end_height
			# Save that value in a list
			areas.append(max_width * end_height)

		# Get the highest value
		greatest_area = reduce(lambda a, b: a if a > b else b, areas)
		return greatest_area