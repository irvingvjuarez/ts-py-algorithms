const MIN_WORDS_LENGTH = 1;
const MAX_WORDS_LENGTH = 100;
const ORDER_LENGTH = 26;

async function alienDictionary(words: string[], order: string) {
	const ltWordsLength = words.length < MIN_WORDS_LENGTH;
	const gtWordsLength = words.length > MAX_WORDS_LENGTH;
	const wordsLengthValidations = ltWordsLength || gtWordsLength
	const invalidOrderLength = order.length != ORDER_LENGTH;

	if (wordsLengthValidations || invalidOrderLength) {
		const errorParam = invalidOrderLength ? "order" : "words"
		throw new Error(`Invalid ${errorParam} length`)
	}

	let result = true

	// Black box

	return result
}

export default alienDictionary