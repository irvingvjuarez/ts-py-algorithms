import { describe, test, expect } from "vitest"
import searchIn2dArray from "./main"

describe("searchIn2dArray tests", () => {
	test("Test existence", async () => {
		await expect(searchIn2dArray).toBeDefined()
	})

	test("Test correctness", async () => {
		let result = searchIn2dArray([ [1 ,3 , 5], [10,15,19], [23,29,31] ], 3)
		await expect(result).toBe(true)
	})
})