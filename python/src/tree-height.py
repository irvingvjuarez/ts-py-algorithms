from typing import Union, Dict, Optional, TypedDict
import sys
sys.setrecursionlimit(10000)

class Node(TypedDict):
	left: Optional[str]
	right: Optional[str]

class Branch(TypedDict):
	left: Optional[Union[str, Node]]
	right: Optional[Union[str, Node]]

Root = Union[str, None, Branch]

def height(root: Root) -> int:
	if type(root) == str:
		return 0

	has_subtree = any(type(val) == dict for val in list(root.values()))

	if has_subtree:
		return max([
			height(root["left"] if "left" in root else root),
			height(root["right"] if "right" in root else root)
		]) + 1
	else:
		return 1

if __name__ == "__main__":
	tree: Root = {
		"left": {
			"left": {
				"right": "F"
			}
		},
		"right": {
			"left": {
				"left": {
					"left": {
						"right": {
							"right": {
								"left": "L",
								"right": "M"
							}
						}
					}
				},
				"right": "H"
			}
		}
	}

	tree_height = height(tree) # 7
	print(tree_height)