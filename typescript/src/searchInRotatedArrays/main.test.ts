import { describe, test, expect } from "vitest"
import getTargetPosition from "./main"

describe("Tests of getTargetPosition", () => {
	test("Existence", async () => {
		await expect(getTargetPosition).toBeDefined()
	})

	test("Correctness", async () => {
		await expect(getTargetPosition([4,5,6,7,0,1,2], 0)).toBe(4)

		await expect(getTargetPosition([4,5,6,7,0,1,2], 3)).toBe(-1)
	})

	test("Failure", async () => {

	})
})