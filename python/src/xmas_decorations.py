border_up = "/\\"
border_down = "\\/"

face_up = "_\\"
face_down = "_/"

def create_cube(faces: int):
	cube = ""
	cube_range = range(1, faces + 1)

	for item in cube_range:
		cube += " " * (faces - item)
		cube += border_up * item
		cube += face_up * faces
		cube += "\n"

	for item in cube_range:
		cube += " " * (item - 1)
		cube += border_down * (faces - (item - 1))
		cube += face_down * faces
		cube += "\n" if item < faces else ""

	return cube

if __name__ == "__main__":
	# print(
	# 	create_cube(1)
	# )
	print(
		create_cube(4)
	)