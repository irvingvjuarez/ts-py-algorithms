function createSubstringFn(s: string, anagramChars: string) {
	return getSubstringFn.bind(this, s, anagramChars)
}

function getSubstringFn(s: string, anagramChars: string, p1: number, p2: number): string {
	return s
		.slice(p1, p2)
		.split("")
		.join("")
}

function allCharsIncluded(substringList: string[], anagramChars: string) {
	return substringList.every(item => anagramChars.includes(item))
}

function noDuplicatedChars(substringList: string[], anagramChars: string) {
	substringList.sort()
	const charsCounter = anagramChars
		.split("")
		.map(char => substringList.lastIndexOf(char) - substringList.indexOf(char) + 1)

	return !charsCounter.some(charCounter => charCounter > 1)
}

function isSubstringAnagram(substring: string, anagramChars: string) {
	const substringList = substring.split("")

	return allCharsIncluded(substringList, anagramChars) && noDuplicatedChars(substringList, anagramChars)
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
			const isP2ValueValid = substring.length < p.length && p.includes(p2Value) && !substring.includes(p2Value)

			if (!isP2ValueValid) {
				if (isSubstringAnagram(substring, p)) anagramsFirstIndex.push(p1)
				p1++
			}
		}

		p2++
		substring = getSubstring(p1, p2)
	}

	return anagramsFirstIndex
}

export default getAnagrams
