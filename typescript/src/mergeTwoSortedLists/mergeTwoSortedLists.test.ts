import { describe, test, expect } from "vitest"
import Merger from "."

describe("Merger tests", () => {
	test("Getters", async () => {
		const merger = new Merger([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
		await expect(merger.nums1).toEqual([1, 2, 3, 0, 0, 0])
		await expect(merger.size1).toBe(3)
		await expect(merger.nums2).toEqual([2, 5, 6])
		await expect(merger.size2).toBe(3)
	})

	test("Correct sorted solution", async () => {
		const merger = new Merger([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
		await expect(merger.sort()).toEqual([1, 2, 2, 3, 5, 6])

		merger.updateValues([1, 2, 3, 0, 0, 0, 0], 3, [-4, 2, 3, 9], 4)
		await expect(merger.sort()).toEqual([-4, 1, 2, 2, 3, 3, 9])
	})
})