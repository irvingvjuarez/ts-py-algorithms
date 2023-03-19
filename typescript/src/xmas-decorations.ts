const borderUp = "/\\"
const borderDown = "\\/"

const faceUp = "_\\"
const faceDown = "_/"

const lineJump = "\n"

function createCube(faces: number) {
	let cube = ""

	for (let i = 1; i <= faces; i++) {
		cube += " ".repeat(faces - i)
		cube += borderUp.repeat(i)
		cube += faceUp.repeat(faces)
		cube += lineJump
	}

	for (let i = 1; i <= faces; i++) {
		cube += " ".repeat(i - 1)
		cube += borderDown.repeat(faces - (i - 1))
		cube += faceDown.repeat(faces)
		cube += i < faces ? lineJump : ""
	}

	return cube
}

console.log(
	createCube(3)
)