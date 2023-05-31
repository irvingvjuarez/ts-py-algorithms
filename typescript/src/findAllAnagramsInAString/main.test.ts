import { describe, test, expect } from "vitest"
import getAnagrams from "./main"

describe("Tests of getAnagrams", () => {
	test("Existence", async () => {
		await expect(getAnagrams).toBeDefined()
	})

	test("Correctness", async () => {
		await expect(getAnagrams("cbaebabacd", "abc")).toEqual([0,6])

		await expect(getAnagrams("abab", "ab")).toEqual([0,1,2])
	})

	test("Failure", async () => {

	})
})