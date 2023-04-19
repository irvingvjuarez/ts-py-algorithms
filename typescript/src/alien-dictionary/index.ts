async function alienDictionary(words: string[], order: string) {
	const ltWordsLength = words.length < 1;
	const gtWordsLength = words.length > 100;
	const wordsLengthValidations = ltWordsLength || gtWordsLength

	if (wordsLengthValidations) throw new Error("Invalid words length")
}

export default alienDictionary