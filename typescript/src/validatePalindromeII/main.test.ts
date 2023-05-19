import { describe, test, expect } from "vitest"
import validatePalindrome from "./main"

describe("Palindrome Test", () => {
	test("Testing existence", async () => {
		await expect(validatePalindrome).toBeDefined()
	})

	test("Testing correctness", async () => {
		let result = validatePalindrome.solve("aba")
		await expect(result).toBe(true)

		result = validatePalindrome.solve("abca")
		await expect(result).toBe(true)
	})

	test("Testing failness", async () => {
		let result = validatePalindrome.solve("acbba")
		await expect(result).toBe(false)
	})
})