import { describe, test, expect } from "vitest"
import ValidatePalindrome from "./main"

describe("Palindrome Test", () => {
	test("Testing existence", async () => {
		await expect(ValidatePalindrome).toBeDefined()
	})

	test("Testing correctness", async () => {
		let result = ValidatePalindrome.solve("aba")
		await expect(result).toBe(true)

		result = ValidatePalindrome.solve("abca")
		await expect(result).toBe(true)
	})

	test("Testing failness", async () => {
		let result = ValidatePalindrome.solve("acbba")
		await expect(result).toBe(false)
	})
})