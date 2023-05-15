from typing import List

def waterTrappedFrom(heights: List[int]):
  size = len(heights) - 1
  h = None
  w = None

  sides = {
		"left_to_right": 0,
    "right_to_left": 0
	}

  for key, value in sides.items():
    differences = 0
    total = 0

    if key == "left_to_right":
      h = 0
      w = h + 1
    else:
      h = size
      w = h - 1

    pointers_in_range = h < size and w < size if key == "left_to_right" else h >= 0 and w >= 0

    while pointers_in_range:
      if h > w:
        differences = differences + (h - w)
      else:
        total = total + differences
        differences = 0
        h = w

      w = w + 1 if key == "left_to_right" else w - 1
      pointers_in_range = h < size and w < size if key == "left_to_right" else h >= 0 and w >= 0

    sides[key] = total

  result = sides["left_to_right"] + sides["right_to_left"]
  return result


print(
  waterTrappedFrom([0,1,0,2,1,0,1,3,2,1,2,1])
)