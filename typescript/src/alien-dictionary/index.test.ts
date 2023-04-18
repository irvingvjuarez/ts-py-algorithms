import { describe, it, expect } from "vitest"

function alienDictionary(words: string[], order: string): Error {
	// const ltMinWordsLength = words.length < 1;
	// const exceededWordsLength = words.length > 100
	// const invalidWordsLength = ltMinWordsLength || exceededWordsLength;

	// if (invalidWordsLength) {
	// 	throw new Error()
	// }

	throw new Error()
}

describe("Alien dictionary algorithm", () => {
	it("Should be a function", () => {
		expect(alienDictionary).toBeInstanceOf(Function)
	})

	it("words param should be >= 1 && <= 100", () => {
		expect(alienDictionary([], "")).toThrow()
		// expect(() => alienDictionary([], "abcdefghijklmnopqrstuvwxyz")).toThrow()
		// expect(() => alienDictionary(['O', '\n', '\x1A', '\x8F', 'n', '\x1D', '\x07', "'", '\x11', '5', 'L', '$', 'y', 'C', '\b', 'g', 'i', 'F', '\x8F', 'P', 'F', '(', 'v', '<', '\x1E', '6', '\x1D', '2', '\x17', 'r', 'b', '{', 'C', '\x94', '\x07', 'V', 'F', 'M', '\x1B', '\x8E', '\x1E', '\x19', ')', '\x1B', '\x1E', 'o', 'F', "'", 'Y', '.', 'Y', 'X', 'z', 'R', '\v', ':', '+', 'M', '$', 'A', '\x1B', 'J', '\x8F', '\x1F', '\x13', 'k', "'", 'W', 'v', '4', 'O', '\x80', '\x8F', 'i', '$', ')', '6', '\x8C', 'P', 'l', '\x04', 'W', '\x02', '\x1F', 'X', '\r', '\x1F', '<', '\x1A', 'F', 'X', 'X', 'w', 'Z', 'Y', '\x1F', 'x', '\x95', '\x87', '{'], "abcdefghijklmnopqrstuvwxyz")).toThrow()
	})
})