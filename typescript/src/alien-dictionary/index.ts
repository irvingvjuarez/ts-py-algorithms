async function alienDictionary(words: string[], order: string) {
	const ltMinWordsLength = words.length < 1;
	const emptyOrder = (order == "")

	if (ltMinWordsLength || emptyOrder) {
		throw new Error("Invalid parameters")
	}
}

export default alienDictionary