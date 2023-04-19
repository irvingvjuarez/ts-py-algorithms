import { expect, test, describe } from "vitest"
import alienDictionary from "./index"
import { exceedingWordsLength } from "./utils"

describe("Testing alien-dictionary", () => {

	test("Should be a function", () => {
		expect(alienDictionary).toBeInstanceOf(Function)
	})

	test("words param should be >= 1 && <= 100", async () => {
		const alienAlphabet = "abcdefghijkmnopqrstuvwxyz"

		await expect(() => alienDictionary([], alienAlphabet)).rejects.toThrow("Invalid words length")

		// exceedingWordsLength variable is an array with 101 words, which is invalid
		await expect(() => alienDictionary(exceedingWordsLength, alienAlphabet)).rejects.toThrow("Invalid words length")
	})
})