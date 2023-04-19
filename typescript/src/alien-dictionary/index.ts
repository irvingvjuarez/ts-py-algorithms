async function alienDictionary(words: string[], order: string) {
	const ltWordsLength = words.length < 1;
	const gtWordsLength = words.length > 100;
	const wordsLengthValidations = ltWordsLength || gtWordsLength
	const invalidOrderLength = order.length != 25

	if (wordsLengthValidations || invalidOrderLength) {
		const errorParam = invalidOrderLength ? "order" : "words"
		throw new Error(`Invalid ${errorParam} length`)
	}
}

export default alienDictionary