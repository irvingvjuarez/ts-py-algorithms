type Branch = {
	left?: string | Branch,
	right?: string | Branch
}

type Root = string | Branch | undefined

function height(root: Root): number {
	if (!root) return 0

	const hasSubtree = Object.values(root).some(branch => typeof branch === "object")

	if (hasSubtree) {
		return Math.max(
			height(typeof root == "string" ? root : root.left),
			height(typeof root == "string" ? root : root.right)
		) + 1
	} else {
		return 1
	}
}

const tree = {
	left: {
		left: {
			right: "f"
		}
	},
	right: {
		left: {
			left: {
				left: {
					right: {
						right: {
							left: "L",
							right: "M"
						}
					}
				}
			},
			right: "H"
		}
	}
}

console.log(height(tree))