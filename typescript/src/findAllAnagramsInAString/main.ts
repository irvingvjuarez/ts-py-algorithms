function createSubstringFn(s: string, anagramChars: string) {
	return getSubstringFn.bind(this, s, anagramChars)
}

function getSubstringFn(s: string, anagramChars: string, p1: number, p2: number): string {
	return s
		.slice(p1, p2)
		.split("")
		.filter(char => anagramChars.includes(char))
		.join("")
}

function getAnagrams(s: string, p: string) {
	let p1 = 0, p2 = p1 + 1
	const getSubstring = createSubstringFn(s, p)
	let substring = getSubstring(p1, p2)
	const anagramsFirstIndex: number[] = []

	while (p2 <= s.length) {
		if (substring.length === 0) {
			p1++
		} else {
			const p2Value = s[p2] || s[p2 - 1]
			const isP2ValueValid = p.includes(p2Value) && !substring.includes(p2Value)

			if (!isP2ValueValid) {
				if (substring.length === p.length) anagramsFirstIndex.push(p1)
				p1++
			}
		}

		p2++
		substring = getSubstring(p1, p2)
	}

	return anagramsFirstIndex
}

export default getAnagrams
