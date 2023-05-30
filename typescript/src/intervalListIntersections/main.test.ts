<<<<<<< HEAD
import { test, expect, describe } from "vitest"
import IntervalIntersector from "main"

describe("Interval List Intersections tests", () => {
	test("Testing existence", async () => {
		await expect(IntervalIntersector).toBeDefined()
	})

	test("Testing correctness", async () => {
		const intersector = new IntervalIntersector(
			[[0,2],[5,10],[13,23],[24,25]],
			[[1,5],[8,12],[15,24],[25,26]]
		)

		await expect(intersector.getIntersections())
			.toEqual([[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]])

		// Clean up for the next test
		intersector.setIntervalList(1, [[1,3],[5,9]])
		intersector.setIntervalList(2, [])

		await expect(intersector.getIntersections()).toEqual([])
	})
=======
import { describe, test, expect } from "vitest"
import IntervalIntersecter from "./main"

describe("Interval Intersecter tests", () => {
	test("Testing existence", async () => {
		await expect(IntervalIntersecter).toBeDefined()
	})

	test("Testing correctness", async () => {
		const firstList = [[0,2],[5,10],[13,23],[24,25]]
		const secondList = [[1,5],[8,12],[15,24],[25,26]]
		const intersecter = new IntervalIntersecter(firstList, secondList)

		await expect(intersecter.solve()).toEqual([[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]])
	})

	test("Test empty list edge case", async () => {
		const firstList = [[1,3],[5,9]]
		const secondList = []
		const intersecter = new IntervalIntersecter(firstList, secondList)

		await expect(intersecter.solve()).toEqual([])
	})
>>>>>>> a18459ba6c4b6067cad6133c71bdc541ab4f9937
})